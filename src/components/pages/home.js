import React, { useState, useEffect } from 'react'
import { DefaultLayout } from '../_layout'
import { PokeAPI } from '../../pkg/client'
import { PokeCard } from '../cards'
import { Conditional, SpinnerFlex } from '../atoms'
import { PER_PAGE } from '../../pkg/client/PokeAPI'

export const HomePage = () => {
  const [loading, isLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    if (loading) return
    isLoading(true)
    PokeAPI.pokemons
      .list(page)
      .then((results) => {
        setPokemons([...pokemons, ...results])
      })
      .finally(() => isLoading(false))
  }, [page])

  const handleLoadMore = (e) => {
    e.preventDefault()
    setPage(page + 1)
  }

  const finished = !loading && page * PER_PAGE !== pokemons.length
  return (
    <DefaultLayout>
      <div className="container">
        <h1>Pokemons</h1>
        <hr />

        <div className="row d-flex align-items-stretch">
          {pokemons.map((pokemon, key) => (
            <div className="col col-md-4 col-sm-12 col-12 mb-4" key={key}>
              <PokeCard pokemon={pokemon} />
            </div>
          ))}
        </div>
        <Conditional
          condition={loading}
          renderIf={<SpinnerFlex />}
          renderElse={null}
        />
        <div className="row mt-4">
          <div className="col d-flex justify-content-center">
            <Conditional
              condition={!finished}
              renderIf={
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={handleLoadMore}
                  disabled={loading}
                >
                  Load more...
                </button>
              }
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
