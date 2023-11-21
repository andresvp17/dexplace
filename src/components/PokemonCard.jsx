import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TYPES_COLORS } from '../utils/types'

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate()
  return (
    <div
      className='p-3 rounded-xl flex relative min-h-[120px] outline outline-black lg:hover:scale-105 transition cursor-pointer'
      style={{ backgroundColor: `${TYPES_COLORS[pokemon.types[0].type.name]}` }}
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      <div>
        <p className='first-letter:uppercase text-slate-200 text-xl font-bold'>{pokemon.name}</p>
        <div className='flex flex-col items-start'>
          <span className='first-letter:uppercase brightness-110 font-semibold px-2 py-0.5 m-1 text-white rounded-xl' style={{ backgroundColor: `${TYPES_COLORS[pokemon.types[0].type.name]}` }}>
            {pokemon.types[0].type.name}
          </span>
          {pokemon.types.length > 1 &&
            <span className='first-letter:uppercase tracking-tight px-2 py-0.5 font-semibold m-1 text-white rounded-xl' style={{ backgroundColor: `${TYPES_COLORS[pokemon.types[1].type.name]}` }}>
              {pokemon.types[1].type.name}
            </span>}
        </div>
      </div>
      <img
        className='absolute bottom-0 right-0 drop-shadow-md inline'
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
    </div>
  )
}

export default React.memo(PokemonCard)
