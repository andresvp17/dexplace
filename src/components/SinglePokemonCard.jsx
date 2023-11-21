import { TYPES_COLORS } from '../utils/types'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { PokemonSpite } from './'

const SinglePokemonCard = ({ pokemonSpecie, pokemonType, isShiny }) => {
  return (
    <div className='grid content-center mx-auto my-3 w-[95%] h-full'>
      <div className='flex flex-col lg:flex-row lg:justify-center items-center relative  gap-10'>
        <div>
          <PokemonSpite
            isShiny={isShiny}
            name={pokemonType.name}
            sprites={pokemonType.sprites}
            types={pokemonType.types}
          />
          <div className='flex flex-col items-center mb-5'>
            <span className='text-xl text-gray-400 font-bold text-center'>#{pokemonType.id}</span>
            <h2 className='first-letter:uppercase text-3xl font-bold text-slate-700'>{pokemonType.name}</h2>
            {pokemonSpecie && <span className='text-xl font-thin text-gray-400 mb-4'>{pokemonSpecie?.genera[7]?.genus}</span>}
            <div className='flex justify-center'>
              <span className='min-w-[73px] text-center first-letter:uppercase brightness-110 font-semibold px-2 py-0.5 m-1 text-white rounded-xl' style={{ backgroundColor: `${TYPES_COLORS[pokemonType.types[0].type.name]}` }}>
                {pokemonType.types[0].type.name}
              </span>
              {pokemonType.types.length > 1 &&
                <span className='min-w-[73px] text-center first-letter:uppercase tracking-tight px-2 py-0.5 font-semibold m-1 text-white rounded-xl' style={{ backgroundColor: `${TYPES_COLORS[pokemonType.types[1].type.name]}` }}>
                  {pokemonType.types[1].type.name}
                </span>}
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3 shadow-2xl rounded-2xl p-5'>
          <div className='text-center max-w-[450px] p-5'>
            <span className='text-sm font-extrabold tracking-widest'>POKEDEX ENTRY</span>
            {pokemonSpecie && <p>{pokemonSpecie?.flavor_text_entries[0]?.flavor_text}</p>}
          </div>
          <div className='text-center max-w-[450px]'>
            <p className='text-sm font-extrabold tracking-widest mb-5'>ABILITIES</p>
            <div className='flex justify-center gap-4 flex-wrap mb-12'>
              {pokemonType.abilities.map(abilitiy => (
                <span
                  className={`capitalize font-semibold ${abilitiy.is_hidden ? 'bg-red-200' : 'bg-blue-200'} px-6 py-1 rounded-2xl flex items-center gap-1`}
                  key={abilitiy.slot}
                >
                  {abilitiy.ability.name}
                  {abilitiy.is_hidden ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              ))}
            </div>
            <div className='flex flex-col gap-5 text-sm p-8'>
              {pokemonType.stats.map((stat, i) => (
                <div key={i} className='flex items-center justify-between'>
                  <p className='uppercase font-bold text-left mr-5'>{stat.stat.name}: {stat.base_stat}</p>
                  <span className='h-2 rounded-2xl shadow-md' style={{ backgroundColor: `hsl(${stat.base_stat}, 70%, 50%)`, width: `${stat.base_stat}px`, maxWidth: '55%' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePokemonCard
