import { useState, useEffect, useCallback } from 'react'
import { getPokemon, getListOfPokemon } from '../services/pokemonService'

const usePokemon = () => {
  const existingPage = Number(window.localStorage.getItem('pageIndex')) ?? 0
  const [page, setPage] = useState(existingPage)
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (page > 64) setPage(0)
    Promise.resolve(getPokemon({ page }))
      .then(response => {
        setLoading(true)
        Promise.all(response)
          .then(response => {
            setPokemon(response)
            setLoading(false)
          })
      })
  }, [page])

  const handlePage = useCallback((e) => {
    if (e.target.textContent === 'Previous Page' && page !== 0) {
      setPage(prev => {
        window.localStorage.setItem('pageIndex', Number(prev - 1))
        return prev - 1
      })
    } else if (e.target.textContent === 'Next Page') {
      setPage(prev => {
        window.localStorage.setItem('pageIndex', Number(prev + 1))
        return prev + 1
      })
    }
  }, [page])

  return { pokemon, loading, handlePage }
}

export default usePokemon

export const useListOfPokemon = (list) => {
  const [listOfPokemon, setListOfPokemon] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    Promise.all(getListOfPokemon({ listOfPokemon: list }))
      .then(response => {
        setLoading(false)
        setListOfPokemon(response)
      })
  }, [list])

  return { listOfPokemon, loading }
}
