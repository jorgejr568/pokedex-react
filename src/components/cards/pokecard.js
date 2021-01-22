import React, { useState, useEffect } from 'react'
import { Conditional } from '../atoms'
import { SpinnerFlex } from '../atoms'
import { FirstLetterUppercase } from '../../utils'
import styled from 'styled-components'
import { PokeAPI } from '../../pkg/client'

const PokeSpriteImgFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 240px;
`
const PokeSpriteImg = styled.img`
  width: 50%;
`
const PokeSprite = ({ details }) => {
  const sprites = ['dream_world', 'official-artwork']
  let usedSprite = null
  for (const sprite of sprites) {
    usedSprite = details.sprites.other[sprite].front_default
    if (usedSprite) break
  }

  if (!usedSprite) return null

  return (
    <PokeSpriteImgFlex>
      <PokeSpriteImg src={usedSprite} alt={details.name} />
    </PokeSpriteImgFlex>
  )
}

const PokeAbilitiesTable = styled.table`
  margin-top: 32px;
`

const PokeAbilities = ({ details }) => (
  <PokeAbilitiesTable className="table table-bordered">
    <tbody>
      {details.abilities.map(({ ability }, key) => (
        <tr key={key}>
          <td className="text-center">{FirstLetterUppercase(ability.name)}</td>
        </tr>
      ))}
    </tbody>
  </PokeAbilitiesTable>
)

const PokeDetails = ({ details }) => {
  return (
    <>
      <PokeSprite details={details} />
      <PokeAbilities details={details} />
    </>
  )
}

const PokeTitle = styled.h2`
  font-size: 1.4rem;
  text-align: center;
  color: white;
`

export const PokeCard = ({ pokemon }) => {
  const [loading, isLoading] = useState(true)
  const [details, setDetails] = useState({})

  useEffect(() => {
    if (!pokemon.url) return
    PokeAPI.pokemons.show(pokemon.url).then((result) => {
      setDetails(result)
      isLoading(false)
    })
  }, [pokemon])

  return (
    <div className="card" style={{ height: '100%' }}>
      <div className="card-header bg-danger">
        <PokeTitle>{FirstLetterUppercase(pokemon.name)}</PokeTitle>
      </div>
      <div className="card-body">
        <Conditional
          condition={loading}
          renderIf={<SpinnerFlex />}
          renderElse={<PokeDetails details={details} />}
        />
      </div>
    </div>
  )
}
