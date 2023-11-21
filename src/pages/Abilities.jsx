import useAbilities from '../hooks/useAbilities'
import { Spinner } from '../components/'
import { Link } from 'react-router-dom'
import { getRandomColor } from '../utils/dummy'
import { handleTitle } from '../utils/utilityFn'

const Abilities = () => {
  const { state, handleAbilityPage, dispatch } = useAbilities()

  handleTitle('Abilities')

  return (
    <div className='w-[90%] md:w-[80%] lg:w-[80%] mx-auto p-2'>
      <h1 className='font-bold text-5xl text-center text-slate-700 my-10'>Pokemon Abilities</h1>
      <div className='flex justify-center my-5 gap-2 mb-10'>
        <button onClick={(event) => dispatch({ type: 'set_abilityPage', page: handleAbilityPage(event) })} className='bg-red-400 text-slate-100 px-6 py-1 font-bold rounded-2xl lg:hover:shadow-inner lg:hover:bg-slate-100 lg:hover:text-red-400 transition'>Previous Page</button>
        <button
          disabled={state.abilityPage === 11}
          onClick={(event) => dispatch({ type: 'set_abilityPage', page: handleAbilityPage(event) })}
          className={`${state.abilityPage === 11 ? 'bg-slate-400' : 'bg-red-400 lg:hover:bg-slate-100 lg:hover:text-red-400'} text-slate-100 px-6 py-1 font-bold rounded-2xl lg:hover:shadow-inner transition`}
        >Next Page
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {
        state.loading
          ? <Spinner />
          : state.abilities.map(ability => (
            <Link
              className='w-full text-center inline-grid'
              to={`/abilities/${ability.name}`}
              key={ability.name}
            >
              <span className={`first-letter:uppercase font-semibold text-xl tracking-wide ${getRandomColor()} px-3 rounded-full text-white lg:hover:bg-slate-300 lg:hover:text-slate-900 transition-colors lg:hover:shadow-lg`}>{ability.name}</span>
            </Link>
          ))
}
      </div>
    </div>
  )
}

export default Abilities
