import { POKEMON_API } from '../utils/apiEndPoints'
const LIMIT = 20

export const getPokemon = async ({ page = 0 }) => {
  if (page > 64) {
    window.localStorage.setItem('pageIndex', 0)
    page = 0
  }
  const res = await fetch(`${POKEMON_API}pokemon?limit=20&offset=${LIMIT * page}`)
  const { results } = await res.json()

  const pokemons = results.map(async pokemon => {
    return await fetch(pokemon.url)
      .then(res => res.json())
      .then(response => response)
  })
  return pokemons
}

export const getListOfPokemon = ({ listOfPokemon } = {}) => {
  const pokemonURLs = listOfPokemon.map(pokemon => pokemon.url)
  const query = pokemonURLs.map(async (url) => {
    return await fetch(url)
      .then(response => response.json())
      .then(response => response)
  })

  return query
}

export const getSearch = async (searchTerm, endpoint) => {
  if (!searchTerm) return []

  try {
    const searchQuery = await fetch(`${POKEMON_API}pokemon/${searchTerm.toLowerCase()}`)
    const searchResult = await searchQuery.json()

    console.log(searchQuery)

    return [searchResult]
  } catch (error) {
    console.log('Something went wrong')
  }
}

export const getSinglePokemon = async ({ id }) => {
  const specieRequest = await fetch(`${POKEMON_API}pokemon-species/${id}`)
    .then(response => {
      if (response.ok) return response.json()
      throw new Error('Promise Failed')
    })
    .then(response => response)
    .catch(err => console.error(err))

  const pokemonRequest = await fetch(`${POKEMON_API}pokemon/${id}`)
  const pokemonResult = await pokemonRequest.json()

  return [specieRequest, pokemonResult]
}
