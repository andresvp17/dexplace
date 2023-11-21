import { createContext, useContext, useState } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleShowSettings = () => {
    setShowSettings(!showSettings)
  }

  return (
    <Context.Provider value={{
      showMenu,
      setShowMenu,
      handleMenu,
      showSettings,
      handleShowSettings
    }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
