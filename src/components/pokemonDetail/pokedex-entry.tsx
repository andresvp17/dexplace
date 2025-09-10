import { formatFlavorText } from '@/utils/fn'

export const PokedexEntry = ({
  flavorText,
  weight,
  height,
}: {
  flavorText: string
  weight: number
  height: number
}) => {
  return (
    <article className="w-[90%] md:w-full">
      <div className="flex flex-col gap-4 mb-4">
        <strong className="text-xl">Pokedex Entry</strong>
        <p className="max-w-[500px] leading-relaxed">
          {formatFlavorText(flavorText)}
        </p>
      </div>
      <div className="flex gap-4">
        <div className="bg-white flex flex-col gap-2 justify-center items-center shadow-md rounded-md p-5">
          <strong>Weight</strong>
          <span>{weight}kg</span>
        </div>
        <div className="bg-white flex flex-col gap-2 justify-center items-center shadow-md rounded-md p-5">
          <strong>Height</strong>
          <span>{height}m</span>
        </div>
      </div>
    </article>
  )
}
