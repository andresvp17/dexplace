import { useState, useEffect } from 'react'
import { getMoves, getSingleMove } from '../services/getMoves'

export const useMoves = () => {
  const [moves, setMoves] = useState([])
  const [movesPage, setMovesPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getMoves({ page: movesPage })
      .then(response => {
        setMoves(response)
        setLoading(false)
      })
  }, [movesPage])

  const handleMovePage = (event) => {
    if (event.target.textContent === 'Previous Page') {
      return setMovesPage(prev => {
        if (prev - 1 < 0) return 0
        return Number(prev) - 1
      })
    }
    return setMovesPage(prev => {
      return Number(prev) + 1
    })
  }

  return { moves, handleMovePage, loading }
}

export const useSingleMove = (name) => {
  const [singleMove, setSingleMove] = useState()

  useEffect(() => {
    getSingleMove(name)
      .then(response => {
        setSingleMove(response)
      })
  }, [])

  return { singleMove }
}
