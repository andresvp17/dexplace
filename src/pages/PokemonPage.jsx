import { useParams } from 'react-router-dom'
import { SinglePokemonCard, Spinner } from '../components/'
import useSinglePokemon from '../hooks/useSinglePokemon'
import { handleTitle } from '../utils/utilityFn'

const PokemonPage = () => {
  const { id } = useParams()
  const { pokemonSpecie, pokemonType } = useSinglePokemon({ id })

  if (pokemonSpecie) {
    handleTitle(pokemonSpecie.name)
  }

  if (!pokemonType) return <Spinner />

  return (
    <div className='w-full'>
      <SinglePokemonCard
        pokemonType={pokemonType}
        pokemonSpecie={pokemonSpecie}
      />
    </div>
  )
}

export default PokemonPage
