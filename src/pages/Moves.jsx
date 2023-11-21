import { useMoves } from '../hooks/useMoves'
import { Link } from 'react-router-dom'
import { Spinner } from '../components'
import { getRandomColor } from '../utils/dummy'
import { handleTitle } from '../utils/utilityFn'

const Moves = () => {
  const { moves, handleMovePage, loading } = useMoves()
  handleTitle('Moves')

  if (loading) return <Spinner />

  return (
    <div className='w-[90%] md:w-[80%] lg:w-[80%] mx-auto p-2'>
      <h1 className='font-bold text-5xl text-center text-slate-700 my-10'>Pokemon Moves</h1>
      <form className='flex justify-center mb-10'>
        <input
          className='w-[100%] max-w-[330px] rounded-l-2xl px-3 py-1 bg-slate-50 focus:outline-red-400'
          placeholder='Search for a move...'
          type='text'
        />
        <button className='rounded-r-2xl bg-red-400 px-3 text-white font-semibold'>Submit</button>
      </form>
      <div className='flex justify-center my-5 gap-2 mb-10'>
        <button onClick={handleMovePage} className='bg-red-400 text-slate-100 px-6 py-1 font-bold rounded-2xl lg:hover:shadow-inner lg:hover:bg-slate-100 lg:hover:text-red-400 transition'>Previous Page</button>
        <button onClick={handleMovePage} className='bg-red-400 text-slate-100 px-6 py-1 font-bold rounded-2xl lg:hover:shadow-inner lg:hover:bg-slate-100 lg:hover:text-red-400 transition'>Next Page</button>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {moves.map(move => (
          <Link
            className='w-full text-center inline-grid'
            to={`/moves/${move?.name}`}
            key={move?.name}
          >
            <span className={`first-letter:uppercase font-semibold text-xl tracking-wide ${getRandomColor()} px-3 rounded-full text-white lg:hover:bg-slate-300 lg:hover:text-slate-900 transition-colors lg:hover:shadow-lg`}>{move.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Moves
