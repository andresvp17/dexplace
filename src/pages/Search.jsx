import React from 'react'
import { SearchForm } from '../components'
import useSearch from '../hooks/useSearch'
import PokemonList from '../components/ListOfPokemon'
import pikachu from '../../public/assets/pikachu.webp'
import { handleTitle } from '../utils/utilityFn'

const Search = () => {
  const { searchResult, handleSearchTerm, loading } = useSearch()
  handleTitle('Search')

  return (
    <div className='w-full'>
      <section className='w-[90%] mx-auto bg-red-400 rounded-full m-5 flex flex-col items-center'>
        <img className='w-48' src={pikachu} alt='pikachu sat down' />
        <SearchForm onHandleSubmit={handleSearchTerm} />
      </section>
      {!loading && <PokemonList pokemonList={searchResult} />}
    </div>
  )
}

export default Search
