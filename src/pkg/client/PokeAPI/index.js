import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

const endpoints = {
  pokemons: {
    list: '/pokemon',
  },
}

export const PER_PAGE = 21

export const PokeAPI = {
  pokemons: {
    list: async (page = 1) => {
      const [limit, offset] = [PER_PAGE, (page - 1) * PER_PAGE]
      const {
        data: { results },
      } = await api.get(endpoints.pokemons.list, {
        params: { limit, offset },
      })

      return results
    },
    show: async (url) => {
      const { data: result } = await api.get(url)

      return result
    },
  },
}
