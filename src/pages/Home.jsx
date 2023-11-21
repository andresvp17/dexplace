import React from 'react'
import { Header, Pokedex } from '../components'
import { handleTitle } from '../utils/utilityFn'

const Home = () => {
  handleTitle('Home')
  return (
    <div className='flex flex-col m-4 lg:w-3/4 sm:w-[95%] '>
      <Header />
      <Pokedex />
    </div>
  )
}

export default Home
