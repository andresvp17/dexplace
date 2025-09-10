import { formatEvolutionChain } from '@/utils/fn'
import { getMetadata, getEvolutionChain } from '@/services/get-pokemon-metadata'
import { getPokemonByName } from '@/services/get-pokemon'
import { useQuery } from '@tanstack/react-query'
import { type Pokemon } from '@/types/index.d'
import { type EvolutionChainResponse } from '@/types/evolution.d'
import { type PokeMetadata } from '@/types/pokemetadata.d'

export const useEvolutionChain = ({ id }: { id: number }) => {
  const { isLoading, isPending, data, error } = useQuery({
    queryKey: ['chain'],
    queryFn: async () => {
      const {
        evolution_chain: { url },
      } = (await getMetadata({ id })) as PokeMetadata
      const response = (await getEvolutionChain({
        url,
      })) as EvolutionChainResponse

      if (response.chain.evolves_to.length === 0) {
        return []
      }

      const chain = formatEvolutionChain({ chainResponse: response })
      const chainData: Promise<Pokemon>[] =
        chain?.map(async (pokemonName: string) =>
          getPokemonByName(pokemonName)
        ) || []

      return Promise.all(chainData)
    },
  })

  return { isLoading: isLoading || isPending, data, error }
}
