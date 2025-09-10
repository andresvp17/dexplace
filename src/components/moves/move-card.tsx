import { type Move } from '@/types/moves'
import { MOVE_TYPE } from '@/constants/constants'
import { TYPES_COLORS } from '@/constants/constants'
import { Link } from 'react-router'

type Props = {
  move: Move
}

export const MoveCard = ({ move }: Props) => {
  const { damage_class, name, power, type, pp } = move

  const typeSource = MOVE_TYPE[damage_class.name as keyof typeof MOVE_TYPE]
  const moveType = TYPES_COLORS[type.name as keyof typeof TYPES_COLORS]

  return (
    <Link
      className="md:hover:scale-105 transition-transform"
      to={`/moves/${name}`}
    >
      <div
        style={{ backgroundColor: `${moveType}` }}
        className="p-2 border-2 w-[150px] border-black rounded-lg"
      >
        <span className="flex flex-col">
          <strong className="capitalize">{name}</strong>
          <small>
            Power: <span className="font-semibold">{power}</span>
          </small>
          <small>PP: {pp}</small>
        </span>
        <div className="flex gap-4 items-center">
          <img className="w-[50px]" src={typeSource} alt={name} />
          <span
            className="capitalize shadow-md min-w-[50px] text-center px-2 py-1 rounded-sm font-bold text-white text-sm"
            style={{
              backgroundColor: `${moveType}`,
            }}
          >
            {type.name}
          </span>
        </div>
      </div>
    </Link>
  )
}
