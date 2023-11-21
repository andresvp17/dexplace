import { TYPES_COLORS } from '../utils/types'
import { Link } from 'react-router-dom'

const TypeRelation = ({ damageRelations }) => {
  const {
    double_damage_from: doubleDamage,
    double_damage_to: doubleDamageTo,
    half_damage_from: halfDamageFrom,
    half_damage_to: halfDamageTo
  } = damageRelations

  return (
    <div>
      <section>
        {doubleDamage.length > 0 && (
          <div className='flex items-center flex-wrap mb-8'>
            <h3 className='text-xl font-semibold w-full mb-3'>Double Damage From:</h3>
            {doubleDamage.map(damageType => (
              <Link
                to={`/type/${damageType.name}`}
                style={{ backgroundColor: `${TYPES_COLORS[damageType.name]}` }}
                className='first-letter:uppercase rounded-full text-center outline outline-black w-[90px] font-semibold text-white m-2 py-1 px-3 lg:hover:scale-105 transition-transform' key={damageType.name}
              >
                {damageType.name}
              </Link>
            ))}
          </div>
        )}
        {doubleDamageTo.length > 0 && (
          <div className='flex items-center flex-wrap mb-8'>
            <h3 className='text-xl font-semibold w-full mb-3'>Double Damage To:</h3>
            {doubleDamageTo.map(damageType => (
              <Link
                to={`/type/${damageType.name}`}
                style={{ backgroundColor: `${TYPES_COLORS[damageType.name]}` }}
                className='first-letter:uppercase rounded-full text-center outline outline-black w-[90px] font-semibold text-white m-2 py-1 px-3 lg:hover:scale-105 transition-transform' key={damageType.name}
              >
                {damageType.name}
              </Link>
            ))}
          </div>
        )}
        {halfDamageFrom.length > 0 && (
          <div className='flex items-center flex-wrap mb-8'>
            <h3 className='text-xl font-semibold w-full mb-3'>Half Damage From:</h3>
            {halfDamageFrom.map(damageType => (
              <Link
                to={`/type/${damageType.name}`}
                style={{ backgroundColor: `${TYPES_COLORS[damageType.name]}` }}
                className='first-letter:uppercase rounded-full text-center outline outline-black w-[90px] font-semibold text-white m-2 py-1 px-3 lg:hover:scale-105 transition-transform' key={damageType.name}
              >
                {damageType.name}
              </Link>
            ))}
          </div>
        )}
        {halfDamageTo.length > 0 && (
          <div className='flex items-center flex-wrap'>
            <h3 className='text-xl font-semibold w-full mb-3'>Half Damage To:</h3>
            {halfDamageTo.map(damageType => (
              <Link
                to={`/type/${damageType.name}`}
                style={{ backgroundColor: `${TYPES_COLORS[damageType.name]}` }}
                className='first-letter:uppercase rounded-full text-center outline outline-black w-[90px] font-semibold text-white m-2 py-1 px-3 lg:hover:scale-105 transition-transform' key={damageType.name}
              >
                {damageType.name}
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default TypeRelation
