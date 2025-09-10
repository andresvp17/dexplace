import { MOVE_TYPE, TYPES_COLORS } from '@/constants/constants'

type Props = {
  damageType: string
  type: string
  name: string
}

export const HeaderMoveDetail = ({ damageType, name, type }: Props) => {
  const typeSource = MOVE_TYPE[damageType as keyof typeof MOVE_TYPE]
  const moveType = TYPES_COLORS[type as keyof typeof TYPES_COLORS]

  return (
    <header className="flex flex-col justify-center items-center">
      <h2 className="capitalize text-4xl sm:text-6xl text-center font-bold">
        {name}
      </h2>
      <div className="flex gap-4 items-center">
        <img className="w-[70px]" src={typeSource} alt={name} />
        <span
          className="capitalize shadow-md min-w-[50px] text-center px-2 py-1 rounded-sm font-bold text-white text-sm"
          style={{
            backgroundColor: `${moveType}`,
          }}
        >
          {type}
        </span>
      </div>
    </header>
  )
}
