import { useState, useEffect } from 'react'
import { getGeneration } from '../services/getGeneration'

const useGeneration = () => {
  const [generation, setGeneration] = useState([])
  const [generationPage, setGenerationPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    Promise.resolve(getGeneration({ gen: generationPage }))
      .then(({ promisedGenerationPokemon, name }) => {
        setLoading(true)
        Promise.all(promisedGenerationPokemon)
          .then(response => {
            setGeneration({ pokemonGeneration: response, name })
            setLoading(false)
          })
      })
  }, [generationPage])

  return { generation, loading, setGenerationPage }
}

export default useGeneration
