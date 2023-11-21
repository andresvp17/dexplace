import { POKEMON_API } from '../utils/apiEndPoints'

export const getGeneration = async ({ gen = 2 } = {}) => {
  const generationQuery = await fetch(`${POKEMON_API}generation/${gen}`)
  const { pokemon_species: pokemonSpecies, main_region: { name } } = await generationQuery.json()

  const promisedGenerationPokemon = pokemonSpecies.map(async ({ url }) => {
    const pokemonID = url.substring(42)

    return await fetch(`${POKEMON_API}pokemon/${pokemonID}`)
      .then(response => response.json())
      .then(response => response)
  })

  return { promisedGenerationPokemon, name }
}
