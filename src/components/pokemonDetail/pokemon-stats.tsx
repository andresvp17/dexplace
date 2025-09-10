import { type Pokemon } from '@/types/index.d'

export const PokemonStats = ({ stats }: { stats: Pokemon['stats'] }) => {
  const isSpecial = (statName: string) => statName.includes('special')
  const specialText = (statName: string) =>
    statName === 'special-attack' ? 'Sp. Atk' : 'Sp. Def'

  return (
    <div className="flex flex-col gap-5 text-sm p-8 rounded-md shadow-md bg-white w-full min-w-[320px] max-w-[400px]">
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="flex gap-2">
            <p className="text-gray-400 capitalize font-semibold tracking-wider text-left mr-5 w-[100px]">
              {isSpecial(stat.stat.name)
                ? specialText(stat.stat.name)
                : stat.stat.name}
              :{' '}
              <span className="text-gray-900 font-bold tracking-normal">
                {stat.base_stat}
              </span>
            </p>
          </div>
          <div className="flex flex-1 bg-gray-200 rounded-md">
            <span
              className="h-2 rounded-2xl shadow-md"
              style={{
                backgroundColor: `hsl(${stat.base_stat}, 70%, 50%)`,
                width: stat.base_stat >= 250 ? '215px' : `${stat.base_stat}px`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
