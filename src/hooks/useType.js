import { useState, useEffect } from 'react'
import { getTypes } from '../services/getTypes'

const useTypes = (pokemonType) => {
  const [type, setType] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
      getTypes({ type: pokemonType })
        .then(response => {
          setType(response)
        })
    } catch (error) {
      throw new Error('Could not get the types')
    } finally {
      setLoading(false)
    }
  }, [pokemonType])

  return { type, loading }
}

export default useTypes
