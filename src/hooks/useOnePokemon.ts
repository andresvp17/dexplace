import { useQuery } from '@tanstack/react-query'
import { getPokemonByName } from '@/services/get-pokemon'
import { type Pokemon } from '@/types'

export const useOnePokemon = ({ name }: { name: string | undefined }) => {
  const { isFetching, isPending, error, data } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => {
      if (!name) return null
      const data = await getPokemonByName(name)

      return data as Pokemon
    },
  })

  return { isFetching, isPending, error, data }
}
