import { useCallback, useState } from 'react'
import { getPokemon, getPokemonResults } from '@/services/get-pokemon'
import { useQuery } from '@tanstack/react-query'
import { getFromLocalStorage, setFromLocalStorage } from '@/utils/localStorage'

export const usePokemonList = () => {
  const initialPage = getFromLocalStorage('page') ?? 0
  const [page, setPage] = useState<number>(initialPage)

  const { isPending, data, isFetching, error } = useQuery({
    queryKey: ['pokemonGrid', page],
    queryFn: async () => {
      const pokemon = await getPokemon(page)
      const results = await getPokemonResults(pokemon)

      return results
    },
  })

  const handlePageNext = useCallback(() => {
    setFromLocalStorage('page', page + 1)
    setPage((page) => page + 1)
  }, [page])
  const handlePagePrevious = useCallback(() => {
    setFromLocalStorage('page', page - 1)
    setPage((page) => page - 1)
  }, [page])

  return {
    isFetching,
    isPending,
    data,
    error,
    handlePageNext,
    handlePagePrevious,
    page,
  }
}
