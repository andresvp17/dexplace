import { POKEMON_API } from '../utils/apiEndPoints'

export const getTypes = async ({ type } = {}) => {
  try {
    const typeQuery = await fetch(`${POKEMON_API}type/${type}`)
    const typeJson = await typeQuery.json()

    return typeJson
  } catch (error) {
    console.error(error)
    throw new Error('The type could not be found')
  }
}
