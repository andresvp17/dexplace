import { TYPES_COLORS } from '@/constants/constants'
import { type Type } from '@/types/index.d'

type Props = {
  types: Type[]
}

export const Types = ({ types }: Props) => {
  return (
    <div className="flex gap-2">
      {types.map((typeInfo, i) => (
        <span
          key={i}
          className="capitalize shadow-md min-w-[50px] text-center px-2 py-1 rounded-sm font-bold text-white text-sm"
          style={{
            backgroundColor:
              TYPES_COLORS[typeInfo.type.name as keyof typeof TYPES_COLORS],
          }}
        >
          {typeInfo.type.name}
        </span>
      ))}
    </div>
  )
}
