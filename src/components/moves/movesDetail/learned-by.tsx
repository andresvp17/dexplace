import { Link } from 'react-router'
import { type NamedAPIResource } from '@/types'
import { useState, useMemo } from 'react'
import { Button } from '@/components/buttons/button'

type Props = {
  pokemonList: NamedAPIResource[]
}

export const LearnedByPokemon = ({ pokemonList }: Props) => {
  const [stage, setStage] = useState(0)

  const isMax = (stage + 1) * 10 > pokemonList.length
  const isMin = stage === 0

  const list = useMemo(() => {
    return pokemonList
      .slice(stage * 10, (stage + 1) * 10)
      .map((pokemon) => pokemon)
  }, [stage, pokemonList])

  return (
    <section className="flex flex-col flex-wrap gap-3">
      <strong>Learned By</strong>
      <div className="mx-auto flex justify-center items-center max-w-[600px] gap-2 flex-wrap">
        {list.map((pokemon) => (
          <PokemonElement pokemon={pokemon} />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <Button disabled={isMin} onClick={() => setStage((prev) => prev - 1)}>
          Prev
        </Button>
        <Button disabled={isMax} onClick={() => setStage((prev) => prev + 1)}>
          Next
        </Button>
      </div>
    </section>
  )
}

const PokemonElement = ({ pokemon }: { pokemon: NamedAPIResource }) => {
  return (
    <Link
      className="p-2 border-2 border-dashed rounded-md text-gray-800 font-semibold capitalize md:hover:text-blue-700 transition-colors"
      to={`/pokemon/${pokemon.name}`}
    >
      {pokemon.name}
    </Link>
  )
}
