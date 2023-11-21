import { memo } from 'react'
import useGeneration from '../hooks/useGeneration'
import { REGION_DATA } from '../utils/dummy'
import { ListOfPokemon, Spinner } from '../components'
import { handleTitle } from '../utils/utilityFn'

const Generation = () => {
  const { generation, loading, setGenerationPage } = useGeneration()

  const handleGeneration = (event) => {
    if (event.target.textContent === 'Previous Gen') {
      setGenerationPage(prev => {
        if (prev - 1 === 0) return 1
        return prev - 1
      })
    }
    if (event.target.textContent === 'Next Gen') {
      setGenerationPage(prev => {
        if (prev + 1 === 10) return 1
        return prev + 1
      })
    }
  }

  if (generation.name) {
    handleTitle(generation.name)
  }

  if (loading) return <Spinner />

  return (
    <div className='w-full'>
      <div className='w-full flex justify-center items-center p-3 relative'>
        {generation.name && (
          <img
            className='md:max-h-[350px] aspect-video object-cover rounded-xl brightness-50'
            src={REGION_DATA[generation.name]?.image}
            alt={`Image of ${generation.name} map`}
          />
        )}
        <p className='tracking-widest text-4xl uppercase absolute text-white z-10 font-semibold'>{generation?.name}</p>
      </div>
      <div className='flex justify-center my-5 gap-2'>
        <button onClick={handleGeneration} className='bg-red-400 text-slate-100 px-6 py-1 font-bold rounded-2xl lg:hover:shadow-inner lg:hover:bg-slate-100 lg:hover:text-red-400 transition'>Previous Gen</button>
        <button onClick={handleGeneration} className='bg-red-400 text-slate-100 px-6 py-1 font-bold rounded-2xl lg:hover:shadow-inner lg:hover:bg-slate-100 lg:hover:text-red-400 transition'>Next Gen</button>
      </div>
      <ListOfPokemon pokemonList={generation.pokemonGeneration} />
    </div>
  )
}

export default memo(Generation)
