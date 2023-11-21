import React from 'react'
import dexicon from '../../public/assets/pokedex-icon-28.jpg'
import transparentPokeball from '../../public/assets/Pokeball-Transparent.png'
import { AiOutlineClose } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import { LINKS } from '../utils/links'
import { Link } from 'react-router-dom'

const Menu = () => {
  const { showMenu, handleMenu } = useStateContext()
  return (
    <div className={`flex justify-start max-[768px]:fixed max-[768px]:bg-white max-[768px]:w-full z-10 h-screen md:p-5 lg:w-[20%] flex-col items-center text-center ${showMenu ? 'max-[768px]:translate-x-0' : 'max-[768px]:translate-x-[-110%]'}`}>
      <AiOutlineClose onClick={handleMenu} fontSize={35} className='max-[768px]:absolute max-[768px]:right-5 max-[768px]:top-5 max-[768px]:block z-20 hidden cursor-pointer' />
      <Link to='/' className='flex items-center m-5'>
        <h2 className='text-2xl font-bold mr-2 text-slate-700'>Dexplace</h2>
        <img className='w-12 h-12' src={dexicon} alt='pokedex' />
      </Link>
      <div className='flex flex-col h-full justify-center'>
        {LINKS.map(category => (
          <Link to={category.navTo} key={category.name} className={`rounded-md w-[140px] font-semibold text-slate-100 ${category.color} px-5 py-3 m-5 relative overflow-hidden`}>
            {category.name}
            <img className='absolute opacity-20 w-2/6 -right-4 -top-1' src={transparentPokeball} alt='' />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Menu
