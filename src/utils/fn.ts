import { TYPES_COLORS } from '@/constants/constants'
import type { EvolutionChain, EvolutionChainResponse } from '@/types/evolution'
import type { Pokemon } from '@/types/index.d'
import type { FlavorTextEntry, PokeMetadata } from '@/types/pokemetadata.d'

export const formatData = ({ pokemonInfo }: { pokemonInfo: Pokemon }) => {
  const { name, sprites, types, id, game_indices } = pokemonInfo
  const mainType = types[0].type.name as keyof typeof TYPES_COLORS
  const gameIndex = game_indices[0]?.game_index || id
  const secondaryType = types[1]?.type.name as keyof typeof TYPES_COLORS
  const colorType = TYPES_COLORS[mainType] || 'bg-gray-200'

  return {
    name,
    sprites,
    mainType,
    secondaryType,
    colorType,
    id,
    types,
    gameIndex,
  }
}

export const formatMetadata = ({
  pokemonInfo,
}: {
  pokemonInfo: PokeMetadata
}) => {
  console.log(pokemonInfo)

  const { evolution_chain, flavor_text_entries, generation } = pokemonInfo
  const flavorEntry = flavor_text_entries.find(
    ({ language }) => language.name === 'en'
  )

  const { flavor_text } = flavorEntry as FlavorTextEntry

  return {
    flavor_text,
    evolution_chain,
    generation,
  }
}

const findEvolution = (stack: string[], evolutionInfo: EvolutionChain[]) => {
  for (const evolution of evolutionInfo) {
    stack.push(evolution.species.name)

    if (evolution.evolves_to.length > 0) {
      findEvolution(stack, evolution.evolves_to)
    }
  }
}

export const formatEvolutionChain = ({
  chainResponse,
}: {
  chainResponse: EvolutionChainResponse
}) => {
  const {
    evolves_to,
    species: { name },
  } = chainResponse.chain

  const evoStack: string[] = [name]
  findEvolution(evoStack, evolves_to)

  return evoStack
}

export const formatFlavorText = (text: string): string => {
  return text.replace(/\f/g, ' ').replace(/\s+/g, ' ').trim()
}
