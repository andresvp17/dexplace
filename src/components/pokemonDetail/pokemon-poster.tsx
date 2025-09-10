import { type Pokemon } from '@/types/index.d'
import { Types } from '../ui/pokemonTypes'
import { Button } from '@components/buttons/button'
import { useState } from 'react'

export const PokemonPoster = ({
  poster,
  colorType,
  shinyPoster,
}: {
  poster: string | undefined
  shinyPoster: string | undefined
  colorType: string
}) => {
  const [sprite, setSprite] = useState(poster)

  return sprite ? (
    <article className="flex flex-col items-center gap-4">
      <img
        style={{ filter: `drop-shadow(0 0 40px ${colorType})` }}
        className="w-[300px] h-[300px] aspect-square"
        src={sprite}
        alt=""
      />
      <div className="flex justify-center gap-4">
        <Button onClick={() => setSprite(poster)}>Default</Button>
        <Button onClick={() => setSprite(shinyPoster)}>Shiny</Button>
      </div>
    </article>
  ) : (
    <span>No artwork avaialble</span>
  )
}

export const PokemonPosterHeader = ({
  types,
  gameIndex,
  name,
}: {
  types: Pokemon['types']
  gameIndex: number
  name?: string
}) => {
  return (
    <header className="flex flex-col items-center justify-center gap-2 mb-4">
      <div>
        <strong className="text-4xl capitalize">
          {name + ' '}
          <span className="text-xl text-gray-300">#{gameIndex}</span>
        </strong>
      </div>
      <Types types={types} />
    </header>
  )
}
