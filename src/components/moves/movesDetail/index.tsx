import { useMove } from '@/hooks/useMoves'
import type { Move } from '@/types/moves.d'
import { useParams } from 'react-router'
import { HeaderMoveDetail } from './header'
import { MoveDetailBody } from './detail-body'
import { LearnedByPokemon } from './learned-by'

export const MoveDetail = () => {
  const { name } = useParams<{ name: string }>()
  const { data, error, isLoading } = useMove({ name })

  if (isLoading) return

  if (error) {
    return <p>{error.message}</p>
  }

  const {
    accuracy,
    damage_class,
    power,
    pp,
    type,
    learned_by_pokemon,
    name: moveName,
    flavor_text_entries,
  } = data as Move

  const flavorText = flavor_text_entries.find(
    ({ language }) => language.name === 'en'
  )

  return (
    <section className="flex flex-col gap-10">
      <HeaderMoveDetail
        damageType={damage_class.name}
        name={moveName}
        type={type.name}
      />
      <MoveDetailBody
        accuracy={accuracy}
        description={flavorText?.flavor_text as string}
        power={power ?? '---'}
        pp={pp}
      />
      <LearnedByPokemon pokemonList={learned_by_pokemon} />
    </section>
  )
}
