import { useState, useEffect } from 'react'
import { getSinglePokemon } from '../services/pokemonService'

const useSinglePokemon = ({ id }) => {
  const [pokemonSpecie, setPokemonSpecie] = useState()
  const [pokemonType, setPokemonType] = useState()

  useEffect(() => {
    getSinglePokemon({ id })
      .then(([specieResult, pokemonResult]) => {
        setPokemonSpecie(specieResult)
        setPokemonType(pokemonResult)
      })
  }, [])

  return {
    pokemonSpecie,
    pokemonType
  }
}

export default useSinglePokemon
