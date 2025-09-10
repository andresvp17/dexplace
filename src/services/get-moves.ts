import { type NamedAPIResource } from '@/types/moves.d'

type Response = {
  count: number
  next?: string
  previous?: string
  results: NamedAPIResource[]
}

const BASE_URL = 'https://pokeapi.co/api/v2/move'
const limit = 20

export const getMoves = async (page = 0) => {
  try {
    const response = await fetch(
      `${BASE_URL}?limit=${limit}&offset=${page * limit}`
    )

    if (!response.ok) {
      throw new Error('Could not complete the request')
    }

    return response.json()
  } catch (error) {
    console.error('Failed to fecth the resources ', error)
    return []
  }
}

export const getMovesResult = async (moves: Response) => {
  try {
    const movesPromises = moves.results.map(async ({ url }) => {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    })

    return await Promise.all(movesPromises)
  } catch (error) {
    console.error('Failed to fetch Pokémon details:', error)
    return []
  }
}

export const getMoveByName = async (name: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${name.toLowerCase()}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch Pokémon by name:', error)
    return null
  }
}
