type SimplePokemon = {
  name: string
  url: string
}

const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const limit = 20

export const getPokemon = async (page = 0) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}?limit=${limit}&offset=${page * limit}`
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const { results }: { results: SimplePokemon[] } = await response.json()

    return results
  } catch (error) {
    console.error('Failed to fetch Pokémon:', error)
    return []
  }
}

export const getPokemonResults = async (pokemon: SimplePokemon[]) => {
  try {
    const pokemonPromises = pokemon.map(async ({ url }) => {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    })

    return await Promise.all(pokemonPromises)
  } catch (error) {
    console.error('Failed to fetch Pokémon details:', error)
    return []
  }
}

export const getPokemonByName = async (name: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${name.toLowerCase()}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch Pokémon by name:', error)
    return null
  }
}
