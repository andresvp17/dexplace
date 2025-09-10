import type { Pokemon } from '@/types'
import { ListOfPokemon } from '../pokemonGrid/pokemon-list'
import { Spinner } from '../ui/spinner'
import { useEvolutionChain } from '@/hooks/useEvolutionChain'

export const EvolutionChain = ({ id }: { id: number }) => {
  const { data, error, isLoading } = useEvolutionChain({ id })

  if (error) return

  if (isLoading) {
    return <Spinner />
  }

  return data?.length === 0 ? null : (
    <article className="flex flex-col items-center justify-center gap-8">
      <div>
        <strong>Evolution Line</strong>
      </div>
      <div className="flex justify-center items-center flex-1 gap-8 w-full">
        <ListOfPokemon evolChain={true} pokemonData={data as Pokemon[]} />
      </div>
    </article>
  )
}
