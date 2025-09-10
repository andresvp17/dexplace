import { useParams } from 'react-router'
import { PokemonPoster, PokemonPosterHeader } from './pokemon-poster'
import { formatData } from '@/utils/fn'
import { Spinner } from '../ui/spinner'
import { PokemonInfo } from './pokemon-info'
import { EvolutionChain } from './evolution-chain'
import { useOnePokemon } from '@/hooks/useOnePokemon'
import type { Pokemon } from '@/types/index.d'

export const PokemonDetail = () => {
  const { name } = useParams<{ name: string }>()
  const { data, error, isFetching, isPending } = useOnePokemon({ name })

  if (error) {
    return <p>{error.message}</p>
  }

  if (isFetching || isPending) {
    return <Spinner />
  }

  const {
    sprites,
    colorType,
    types: pokeTypes,
    gameIndex,
    name: pokeName,
    id,
  } = formatData({ pokemonInfo: data as Pokemon })

  const { front_default, front_shiny } = sprites.other['official-artwork']

  return (
    <section className="min-h-dvh flex flex-col items-center justify-center gap-4 p-8 w-full relative">
      <section className="flex flex-col gap-8 xl:flex-row items-center justify-center w-full">
        <div className="w-full flex flex-col gap-8 flex-1">
          <PokemonPosterHeader
            gameIndex={gameIndex}
            name={pokeName}
            types={pokeTypes}
          />
          <PokemonPoster
            poster={front_default}
            shinyPoster={front_shiny}
            colorType={colorType}
          />
          <EvolutionChain id={id} />
        </div>
        <div className="flex-1">
          <PokemonInfo pokemonInfo={data as Pokemon} />
        </div>
      </section>
    </section>
  )
}
