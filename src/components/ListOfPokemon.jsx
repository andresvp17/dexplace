import { PokemonCard, Spinner } from '../components'
import { useListOfPokemon } from '../hooks/usePokemon'

const ListOfPokemon = ({ pokemonList }) => {
  if (!pokemonList) return <Spinner />
  return (
    <>
      {pokemonList.length === 0 && <h1 className='font-bold text-3xl text-center'>No Pokemon yet...</h1>}
      <div className='w-[85%] mx-auto grid max-[415px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-3'>
        {pokemonList.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}

export default ListOfPokemon

export const ListOfGroupPokemon = ({ pokemonList }) => {
  const { listOfPokemon } = useListOfPokemon(pokemonList)
  if (!listOfPokemon) return <Spinner />
  return (
    <>
      <div className='w-[90%] mx-auto grid max-[415px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-3'>
        {listOfPokemon.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
