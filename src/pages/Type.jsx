import React from 'react'
import { TYPES, TYPES_COLORS } from '../utils/types'
import { Link } from 'react-router-dom'
import { handleTitle } from '../utils/utilityFn'

const Type = () => {
  handleTitle('Types')
  return (
    <div className=''>
      <h1 className='text-6xl text-center text-slate-700 my-10 font-bold tracking-wide'>Pokemon Types</h1>
      <section className='flex justify-center items-center flex-wrap'>
        {TYPES.map(type => {
          return (
            <Link
              to={`/type/${type}`}
              key={type}
              style={{ backgroundColor: `${TYPES_COLORS[type]}` }}
              className='first-letter:uppercase rounded-full text-center text-2xl outline outline-black w-[140px] font-semibold text-white px-5 py-3 m-5 relative lg:hover:scale-105 transition-transform'
            >
              {type}
            </Link>
          )
        })}
      </section>
    </div>
  )
}

export default Type
