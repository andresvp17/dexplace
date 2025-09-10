import { type Pokemon } from '@/types/index.d'
import { PokemonCard } from './pokemon-card'

type props = {
  pokemonData: Pokemon[]
  evolChain?: boolean
}

export const ListOfPokemon = ({ pokemonData, evolChain = false }: props) => {
  const gridStyle = !evolChain
    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-content-center place-items-center'
    : 'flex justify-center items-center flex-wrap'

  return (
    <div className={`w-full gap-5 ${gridStyle}`}>
      {pokemonData.map((pokemon) => (
        <PokemonCard pokemonInfo={pokemon} key={pokemon.id} />
      ))}
    </div>
  )
}
