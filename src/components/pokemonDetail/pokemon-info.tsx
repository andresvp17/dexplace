import { PokemonStats } from './pokemon-stats'
import { PokemonMetadata } from './pokemon-metadata'
import { type Pokemon } from '@/types/index.d'

export const PokemonInfo = ({ pokemonInfo }: { pokemonInfo: Pokemon }) => {
  const { weight, height, abilities } = pokemonInfo

  return (
    <section className="md:min-w-[400px] flex flex-col gap-5">
      <PokemonMetadata
        id={pokemonInfo.id}
        pokemonWeight={weight / 10}
        pokemonHeight={height / 10}
        abilities={abilities}
      />
      <PokemonStats stats={pokemonInfo.stats} />
    </section>
  )
}
