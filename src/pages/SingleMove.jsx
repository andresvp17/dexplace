import { useSingleMove } from '../hooks/useMoves'
import { Spinner } from '../components'
import { ListOfGroupPokemon } from '../components/ListOfPokemon'
import { useParams } from 'react-router-dom'
import { TYPES_COLORS } from '../utils/types'
import { handleTitle } from '../utils/utilityFn'

const SingleMove = () => {
  const { name } = useParams()
  const { singleMove } = useSingleMove(name)

  handleTitle(name)

  if (!singleMove) return <Spinner />

  const learnMoveFilter = singleMove?.learned_by_pokemon?.length > 30
    ? singleMove.learned_by_pokemon.slice(0, 30).map(pokemon => pokemon)
    : singleMove.learned_by_pokemon.map(pokemon => pokemon)

  console.log(singleMove)
  return (
    <div className='w-[95%] p-3 mx-auto'>
      <h1 className='first-letter:uppercase font-bold text-6xl text-center tracking-wide text-slate-700 mb-12 '>{singleMove?.name}</h1>
      <section>
        <article className='mb-10'>
          <h2 className='text-3xl font-bold text-red-500'>Move's Effect</h2>
          <p className='leading-7'>{singleMove?.effect_entries[0]?.effect}</p>
        </article>
        <article className='flex flex-col gap-3 mb-10'>
          <h2 className='text-3xl font-bold text-red-500'>Move's Information</h2>
          <p className='text-xl font-semibold text-slate-600'>Type: <span className='font-semibold px-2 py-0.5 m-1 text-white rounded-xl' style={{ backgroundColor: `${TYPES_COLORS[singleMove.type.name]}` }}>{singleMove.type.name}</span></p>
          <p className='text-xl font-semibold text-slate-600'>Move's power: {singleMove?.power}</p>
          <p className='text-xl font-semibold text-slate-600'>Category: {singleMove?.damage_class?.name}</p>
          <p className='text-xl font-semibold text-slate-600'>PP available: {singleMove?.pp}</p>
          <p className='text-xl font-semibold text-slate-600'>Accuracy: {singleMove?.accuracy}</p>
        </article>
      </section>
      <section>
        <h2 className='text-3xl font-bold text-red-500 mb-5'>Pokemon Who Can Learn The Move</h2>
        <div>
          <ListOfGroupPokemon pokemonList={learnMoveFilter} />
        </div>
      </section>
    </div>
  )
}

export default SingleMove
