import { useSearch } from '@/hooks/useSearch'
import { PokemonCard } from '../pokemonGrid/pokemon-card'
import { MoveCard } from '@components/moves/move-card'
import { type Pokemon } from '@/types/index.d'
import { Form } from '../ui/form'
import type { Move } from '@/types/moves.d'

const isPokemon = (data: unknown): boolean =>
  data != null && typeof data === 'object' && 'sprites' in data

export const Search = () => {
  const { data, handleSetParam, searchParam, isLoading } = useSearch()

  const COMPONENT_STATE = {
    ERROR: !isLoading && !data,
    IDLE: !searchParam && !isLoading,
    LOADING: isLoading,
  }

  if (COMPONENT_STATE.LOADING) {
    return (
      <section className="flex flex-col items-center justify-center gap-5 p-8">
        <Form onParam={handleSetParam} />
        <div className="text-gray-500">Searching...</div>
      </section>
    )
  }

  if (COMPONENT_STATE.IDLE) {
    return (
      <section className="flex flex-col items-center justify-center gap-5 p-8">
        <Form onParam={handleSetParam} />
        <div className="text-center text-gray-500">
          <p>Enter a Pokémon name or move to search</p>
          <div className="mt-4 text-sm">
            <p>Try searching for:</p>
            <div className="flex gap-4 justify-center mt-2">
              <button
                onClick={() => handleSetParam({ query: 'pikachu' })}
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Pokémon: pikachu
              </button>
              <button
                onClick={() =>
                  handleSetParam({ query: 'thunderbolt', type: 'move' })
                }
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Move: thunderbolt
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (COMPONENT_STATE.ERROR) {
    return (
      <section className="flex flex-col items-center justify-center gap-5 p-8">
        <Form onParam={handleSetParam} />
        <div className="text-red-500">No results found for "{searchParam}"</div>
      </section>
    )
  }

  return (
    <section className="flex flex-col items-center justify-center gap-5 p-8">
      <Form onParam={handleSetParam} />
      {isPokemon(data) ? (
        <PokemonCard pokemonInfo={data as Pokemon} />
      ) : (
        <MoveCard move={data as Move} />
      )}
    </section>
  )
}
