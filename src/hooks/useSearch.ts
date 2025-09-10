import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'
import { getPokemonByName } from '@/services/get-pokemon'
import { getMoveByName } from '@/services/get-moves'
import type { Move } from '@/types/moves.d'
import type { Pokemon } from '@/types/index.d'

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const searchType = searchParams.get('type') || ''

  const { data, isLoading, isPending, error } = useQuery({
    queryKey: ['search', query, searchType],
    queryFn: async () => {
      if (!query.trim()) return null

      try {
        if (searchType === 'move') {
          return (await getMoveByName(query)) as Move
        }
        return (await getPokemonByName(query)) as Pokemon
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    enabled: !!query.trim(),
  })

  const handleSetParam = ({
    query,
    type,
  }: {
    query: string
    type?: string
  }) => {
    const params: Record<string, string> = { q: query }
    if (type) {
      params.type = type
    }
    setSearchParams(params)
  }

  return {
    data,
    isLoading: isLoading || isPending,
    error,
    searchParam: query,
    handleSetParam,
  }
}
