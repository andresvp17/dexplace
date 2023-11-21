import { memo } from 'react'
import usePokemon from '../hooks/usePokemon'
import { PokemonCard, Spinner } from './'

const Pokedex = () => {
  const { pokemon, loading, handlePage } = usePokemon()

  return (
    loading
      ? <Spinner />
      : <div>
        <div className='flex justify-center my-5 gap-2'>
          <button onClick={handlePage} className='bg-red-400 text-slate-100 px-6 py-1 font-bold rounded-2xl lg:hover:shadow-inner lg:hover:bg-slate-100 lg:hover:text-red-400 transition'>Previous Page</button>
          <button onClick={handlePage} className='bg-red-400 text-slate-100 px-6 py-1 font-bold rounded-2xl lg:hover:shadow-inner lg:hover:bg-slate-100 lg:hover:text-red-400 transition'>Next Page</button>
        </div>
        <div className='grid max-[415px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {pokemon.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        </div>
  )
}

export default memo(Pokedex)
