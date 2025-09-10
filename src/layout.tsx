import { Outlet } from 'react-router'
import { Menu } from './components/ui/icons'
import { useVisible } from '@/store'
import { AsideBar } from '@/components/nav/aside-bar'

export const Layout = () => {
  const setToVisible = useVisible((state) => state.setVisible)
  const handleClick = () => setToVisible(true)

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] h-dvh">
      <div className="blurry-gradient"></div>
      <AsideBar />
      <button
        onClick={handleClick}
        className={`absolute z-10 top-5 right-5 md:hidden`}
      >
        <Menu />
      </button>
      <main className="w-full p-5">
        <Outlet />
      </main>
    </div>
  )
}
