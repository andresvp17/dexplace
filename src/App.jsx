import React from 'react'
import { Home, PokemonPage, Generation, Abilities, SingleAbility, Error, Moves, SingleMove, Type, SingleType, Search } from './pages'
import { Menu, Settings } from './components'
import { StateContext } from './context/StateContext'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <StateContext>
      <main className='flex relative'>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon/:id' element={<PokemonPage />} />
          <Route path='/generation/' element={<Generation />} />
          <Route path='/abilities/' element={<Abilities />} />
          <Route path='/abilities/:name' element={<SingleAbility />} />
          <Route path='/Moves/' element={<Moves />} />
          <Route path='/Moves/:name' element={<SingleMove />} />
          <Route path='/type' element={<Type />} />
          <Route path='/type/:pokeType' element={<SingleType />} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Settings />
      </main>
    </StateContext>
  )
}

export default App
