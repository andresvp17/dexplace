import { Link } from 'react-router'
import type { Pokemon } from '@/types'
import { formatData } from '@/utils/fn'
import { Types } from '../ui/pokemonTypes'

export const PokemonCard = ({ pokemonInfo }: { pokemonInfo: Pokemon }) => {
  const { colorType, name, sprites } = formatData({
    pokemonInfo,
  })

  return (
    <Link className="w-full max-w-[200px]" to={`/pokemon/${name}`}>
      <div
        className="h-[120px] p-2 rounded-xl flex relative outline-2 outline-black md:hover:[&>img]:scale-125 cursor-pointer overflow-hidden"
        style={{ backgroundColor: colorType }}
      >
        <div>
          <p className="first-letter:uppercase text-white text-xl font-bold">
            {name}
          </p>
          <Types types={pokemonInfo.types} />
        </div>
        <img
          className="absolute bottom-0 right-0 inline transition"
          src={sprites.front_default}
          alt={name}
        />
      </div>
    </Link>
  )
}
