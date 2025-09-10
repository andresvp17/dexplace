import { getMoves, getMovesResult, getMoveByName } from '@/services/get-moves'
import { useQuery } from '@tanstack/react-query'
import { useState, useCallback } from 'react'
import { getFromLocalStorage, setFromLocalStorage } from '@/utils/localStorage'
import type { Move } from '@/types/moves.d'

export const useMoves = () => {
  const initialPage = getFromLocalStorage('movesPage') ?? 0
  const [page, setPage] = useState<number>(initialPage)

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['moves', page],
    queryFn: async () => {
      const prefetchedMoves = await getMoves(page)
      const results = await getMovesResult(prefetchedMoves)

      return results
    },
  })

  const handlePageNext = useCallback(() => {
    setFromLocalStorage('movesPage', page + 1)
    setPage((page) => page + 1)
  }, [page])

  const handlePagePrevious = useCallback(() => {
    setFromLocalStorage('movesPage', page - 1)
    setPage((page) => page - 1)
  }, [page])

  return {
    isLoading: isLoading || isFetching,
    data,
    error,
    handlePageNext,
    handlePagePrevious,
    page,
  }
}

export const useMove = ({ name }: { name?: string }) => {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['move'],
    queryFn: async () => {
      const move = await getMoveByName(name || '')

      return move as Move
    },
  })

  return {
    isLoading: isLoading || isFetching,
    data,
    error,
  }
}
