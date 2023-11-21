import { TYPES_COLORS } from '../utils/types'
import { useState, useEffect, useRef } from 'react'
import { GEN_SPRITES } from '../utils/dummy'

const PokemonSprite = ({ sprites, types, name }) => {
  const [sprite, setSprite] = useState(sprites.front_default)
  const [isShiny, setIsShiny] = useState(false)
  const selectRef = useRef(null)
  const shiny = !isShiny ? 'front_default' : 'front_shiny'
  const handleChange = () => {
    setSprite(sprites.versions[selectRef.current.value][GEN_SPRITES[selectRef.current.value]][shiny])
  }

  useEffect(() => {
    setSprite(sprites.versions[selectRef.current.value][GEN_SPRITES[selectRef.current.value]][shiny])
  }, [shiny])

  return (
    <div className='flex flex-col items-center gap-5 mb-8'>
      <div
        className='rounded-full outline-black outline outline-4 p-5 overflow-hidden w-[280px] h-[280px] flex items-center justify-center'
        style={{ backgroundColor: `${TYPES_COLORS[types[0].type.name]}` }}
      >
        <img
          className='w-[80%] object-fill'
          src={sprite ?? sprites[shiny]}
          alt={name}
        />
      </div>
      {sprite === null && (
        <span className='font-bold text-red-500 text-center'>Default Sprite. Pokemon not available in selected generation</span>
      )}
      <form>
        <select onChange={handleChange} ref={selectRef} defaultValue='generation-v' className='bg-transparent border-2 border-slate-400 rounded-2xl text-center cursor-pointer text-slate-500' name='gen-select'>
          <option value='generation-ii'>Generation Two</option>
          <option value='generation-iii'>Generation Three</option>
          <option value='generation-iv'>Generation Four</option>
          <option value='generation-v'>Generation Five</option>
          <option value='generation-vi'>Generation Six</option>
        </select>
      </form>
      <button
        type='button'
        className='font-bold bg-slate-800 text-slate-200 px-5 py-1 rounded-2xl lg:hover:bg-slate-200 lg:hover:text-slate-800 transition-colors'
        onClick={() => setIsShiny(!isShiny)}
      >
        {!isShiny ? 'Show Shiny' : 'Show Default'}
      </button>
    </div>
  )
}

export default PokemonSprite
