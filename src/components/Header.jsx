import React from 'react'
import transparentPokeball from '../../public/assets/Pokeball-Transparent.png'

const Header = () => {
  return (
    <div className='bg-red-400 lg:w-3/4 sm:w-full h-60 rounded-3xl mb-4 mx-auto overflow-hidden relative'>
      <img className='w-3/5 absolute opacity-10 md:w-2/6 lg:w-2/6' src={transparentPokeball} alt='Transparent background pokeball' />
      <div className='flex flex-col h-full justify-center relative'>
        <div className='flex flex-col p-5 items-center'>
          <h1 className='text-5xl font-bold text-slate-200 text-center'>Welcome To Dexplace!</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
