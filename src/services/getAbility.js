import { POKEMON_API } from '../utils/apiEndPoints'

const LIMIT = 30

export const getAbilities = async ({ page = 0 } = {}) => {
  const abilitiesQuery = await fetch(`${POKEMON_API}ability/?offset=${page * LIMIT}&limit=28`)
  const { results } = await abilitiesQuery.json()

  return results.map(async (ability) => {
    return ability
  })
}

export const getOneAbility = async ({ name } = {}) => {
  const abilityQuery = await fetch(`${POKEMON_API}ability/${name}`)
  const abilityResult = await abilityQuery.json()

  return abilityResult
}
