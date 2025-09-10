import { useQuery } from '@tanstack/react-query'
import { getMetadata } from '@/services/get-pokemon-metadata'
import { formatMetadata } from '@/utils/fn'
import { Spinner } from '@/components/ui/spinner'
import { PokedexEntry } from './pokedex-entry'
import { PokemonAbility } from './pokemon-ability'
import { type PokeMetadata } from '@/types/pokemetadata'
import type { Ability } from '@/types'

export const PokemonMetadata = ({
  id,
  pokemonWeight,
  pokemonHeight,
  abilities,
}: {
  id: number
  pokemonWeight: number
  pokemonHeight: number
  abilities: Ability[]
}) => {
  const { data, isPending, isLoading, error } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => {
      const metadata = await getMetadata({ id })
      return metadata
    },
  })

  if (isPending || isLoading) {
    return <Spinner />
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (data.length === 0) return

  const { flavor_text } = formatMetadata({
    pokemonInfo: data as PokeMetadata,
  })

  return (
    <section className="flex flex-col gap-8">
      <PokedexEntry
        flavorText={flavor_text}
        height={pokemonHeight}
        weight={pokemonWeight}
      />
      <PokemonAbility abilities={abilities} />
    </section>
  )
}
