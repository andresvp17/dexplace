import { useState, useEffect } from 'react'
import { getSearch } from '../services/pokemonService'

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getSearch(searchTerm)
      .then((res) => {
        if (!res) {
          return setSearchResult([])
        }
        setSearchResult(res)
      }).finally(() => setLoading(false))
  }, [searchTerm])

  const handleSearchTerm = (term) => setSearchTerm(term)

  return { searchResult, handleSearchTerm, loading }
}

export default useSearch
