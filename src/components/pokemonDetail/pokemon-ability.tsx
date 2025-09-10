import type { Ability } from '@/types'

export const PokemonAbility = ({ abilities }: { abilities: Ability[] }) => {
  return (
    <article>
      <div className="flex justify-center items-center sm:justify-start smw:items-start flex-wrap gap-4">
        {abilities.map(({ ability, is_hidden }, index) => (
          <span
            key={index}
            className={`${
              is_hidden ? 'bg-red-200' : 'bg-blue-200'
            } min-w-[120px] flex flex-col gap-2 justify-center items-center shadow-md rounded-md p-5`}
          >
            <small className="text-gray-700 line-clamp-1 truncate">
              {is_hidden ? 'Hidden Ability' : 'Ability'}
            </small>
            <span className="capitalize line-clamp-1 truncate">
              {ability.name}
            </span>
          </span>
        ))}
      </div>
    </article>
  )
}
