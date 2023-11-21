import { POKEMON_API } from '../utils/apiEndPoints'

const LIMIT = 30

export const getMoves = async ({ page = 1 } = {}) => {
  return await fetch(`${POKEMON_API}move/?offset=${page * LIMIT}&limit=30`)
    .then(res => res.json())
    .then(response => {
      const { results } = response
      return results
    })
    .catch(err => console.error(err))
}

export const getSingleMove = async (name) => {
  const moveQuery = await fetch(`${POKEMON_API}move/${name}`)
  const moveResult = await moveQuery.json()

  return moveResult
}
