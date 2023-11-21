import { useStateContext } from '../context/StateContext'
import { AiOutlineSetting } from 'react-icons/ai'

const Settings = () => {
  const { setShowMenu, handleShowSettings, showSettings } = useStateContext()
  return (
    <div className='md:hidden'>
      <div className={`transition-all flex items-center justify-center fixed bottom-4 right-3 w-10 h-10 rounded-full bg-red-400 mr-3 cursor-pointer ${showSettings && 'halfTurn'} lg:hover:bg-red-500 xl:hover:bg-red-500 transition-colors`}>
        <AiOutlineSetting onClick={handleShowSettings} className='p-2 lg:hover:text-red-400' fontSize={35} color='#fff' />
      </div>
      {showSettings && (
        <div className={`flex flex-col mr-2 fixed bottom-10 right-0 ${showSettings && 'appear'}`}>
          <button
            onClick={() => {
              handleShowSettings()
              setShowMenu(true)
            }} type='button' className='md:hidden lg:hidden border-none outline-none rounded-sm shadow-lg font-semibold bg-slate-100 px-4 py-1 m-2 hover:bg-slate-300'
          >Menu
          </button>
        </div>
      )}
    </div>
  )
}

export default Settings
