import { ListOfPokemon } from '@/components/pokemonGrid/pokemon-list'
import { Button } from '@components/buttons/button'
import { memo } from 'react'
import { Spinner } from '../ui/spinner'
import { usePokemonList } from '@/hooks/usePokemonList'
import type { Pokemon } from '@/types'

const PokemonGridComponent = () => {
  const {
    data,
    error,
    handlePageNext,
    handlePagePrevious,
    isFetching,
    isPending,
    page,
  } = usePokemonList()

  if (error) {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <div className="flex justify-center items-center gap-4 p-4">
        <Button
          onClick={handlePagePrevious}
          disabled={page === 0 || isFetching}
        >
          Previous
        </Button>
        <Button onClick={handlePageNext} disabled={isFetching}>
          Next
        </Button>
      </div>
      <section className="min-h-dvh flex justify-center items-center">
        {isPending || isFetching ? (
          <Spinner />
        ) : (
          <ListOfPokemon pokemonData={data as Pokemon[]} />
        )}
      </section>
    </>
  )
}

export const PokemonGrid = memo(PokemonGridComponent)
