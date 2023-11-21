import { useParams, Link } from 'react-router-dom'
import { useSingleAbility } from '../hooks/useAbilities'
import { Spinner } from '../components'
import { ListOfGroupPokemon } from '../components/ListOfPokemon'
import { GENERATION_NUMS } from '../utils/links'
import { GENERATIONS } from '../utils/dummy'
import { handleTitle } from '../utils/utilityFn'

const SingleAbility = () => {
  const { name } = useParams()
  const { singleAbility } = useSingleAbility(name)

  if (singleAbility) {
    handleTitle(`${name}`)
  }

  if (!singleAbility) return <Spinner />
  const filteredPokemonList = singleAbility.pokemon.map(pokemonURL => pokemonURL.pokemon)

  return (
    <div className='w-[90%] mx-auto p-3'>
      <h1 className='first-letter:uppercase font-bold text-6xl text-center tracking-wide text-slate-700 mb-12 '>{singleAbility?.name}</h1>
      <section>
        <article className='mb-10'>
          <h2 className='text-3xl font-bold text-red-500'>Ability's Effect</h2>
          <p className='leading-7'>{singleAbility?.effect_entries[1]?.effect}</p>
        </article>
        <article className='mb-10'>
          {singleAbility?.effect_changes.length > 0 && <h2 className='text-3xl font-bold text-red-500'>Effect Changes</h2>}
          <section>
            {singleAbility?.effect_changes.map((change, i) => (
              <article className='flex flex-col mb-5 leading-7' key={i}>
                <p className=''>{change?.effect_entries[1].effect}</p>
                <p>Changed made in Pokemon <span className='first-letter:uppercase text-indigo-600 font-bold'>{change?.version_group?.name}</span></p>
              </article>
            ))}
          </section>
        </article>
      </section>
      <section className='mb-10'>
        <h2 className='text-3xl font-bold text-red-500 mb-5'>Pokemon which has the ability</h2>
        <ListOfGroupPokemon pokemonList={filteredPokemonList} />
      </section>
      <ul className='mb-10'>
        <h2 className='text-3xl font-bold text-red-500 mb-5'>Ability's name in different languages</h2>
        {singleAbility?.names.map(({ language, name }, i) => (
          <div key={i}>
            <p className='mb-3'>This is ability name in <span className='font-bold'>{language?.name}</span>: <span className='text-lg'>{name}</span></p>
          </div>
        ))}
      </ul>
      <p className='text-2xl font-semibold'> -- Ability introduced in <Link to={`/generation/${GENERATION_NUMS[singleAbility.generation.name]}`} className='text-indigo-600 font-bold lg:hover:underline'>{GENERATIONS[singleAbility.generation.name]}</Link> generation --</p>
    </div>
  )
}

export default SingleAbility
