import { useMoves } from '@/hooks/useMoves'
import { MoveCard } from './move-card'
import { Spinner } from '../ui/spinner'
import { Button } from '../buttons/button'
import type { Move } from '@/types/moves.d'

export const MovesGrid = () => {
  const { data, isLoading, handlePageNext, handlePagePrevious, page } =
    useMoves()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <MovesHeader
        onNext={handlePageNext}
        onPrev={handlePagePrevious}
        page={page}
      />
      <section className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center place-items-center">
        {data?.map((move: Move) => (
          <MoveCard key={move.id} move={move} />
        ))}
      </section>
    </>
  )
}

type MovesHeaderProps = {
  page: number
  onNext: () => void
  onPrev: () => void
}

export const MovesHeader = ({ onNext, onPrev, page }: MovesHeaderProps) => {
  return (
    <header className="flex items-center justify-center gap-4 mb-5">
      <Button disabled={page === 0} onClick={onPrev}>
        Prev
      </Button>
      <Button onClick={onNext}>Next</Button>
    </header>
  )
}
