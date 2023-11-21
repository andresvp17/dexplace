import { useParams } from 'react-router-dom'
import { ListOfGroupPokemon } from '../components/ListOfPokemon'
import { Spinner, TypeRelation } from '../components'
import useTypes from '../hooks/useType'
import { handleTitle } from '../utils/utilityFn'

const SingleType = () => {
  const { pokeType } = useParams()
  const { type } = useTypes(pokeType)

  handleTitle(pokeType)

  if (!type) return <Spinner />

  const filteredPokemonList = type?.pokemon.map(pokemonFromType => pokemonFromType.pokemon)

  return (
    <div className='grid place-content-center w-[90%] mx-auto'>
      <h1 className='first-letter:uppercase text-6xl text-center text-slate-700 my-10 font-bold tracking-wide'>{type?.name}</h1>
      <section className='mb-8'>
        <h2 className='text-3xl font-bold text-red-500 mb-5'>Relations Of Damage</h2>
        <TypeRelation damageRelations={type?.damage_relations} />
      </section>
      <h2 className='text-3xl font-bold text-red-500 mb-5'>Type's Pokemon</h2>
      <ListOfGroupPokemon pokemonList={filteredPokemonList} />
    </div>
  )
}

export default SingleType
