import { LINKS } from '@/constants/constants'
import { NavLink } from '@components/nav/nav-link'
import { Close } from '../ui/icons'
import { useVisible } from '@/store'
import { Link } from 'react-router'
import '@/css/navigation.css'

export const AsideBar = () => {
  const visible = useVisible((state) => state.visible)
  const closeMenu = useVisible((state) => state.notVisible)
  const handleClose = () => closeMenu(false)

  return (
    <aside className={`${visible ? 'block' : 'hidden'} md:block`}>
      <nav className="fixed flex flex-col items-center h-dvh p-4 w-dvw bg-slate-100 md:bg-transparent md:w-[200px] z-20">
        <Link to={'/'}>
          <h1 className="bg-blue-500 text-white text-3xl text-center link-background rounded-sm py-1.5">
            DEXPLACE
          </h1>
        </Link>
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 md:hidden"
        >
          <Close />
        </button>
        <ul className="h-[90%] flex flex-col items-center justify-evenly p-4">
          {LINKS.map(({ color, name, navTo }, index) => (
            <NavLink
              key={index}
              color={color}
              name={name}
              navTo={navTo}
              onClose={handleClose}
            />
          ))}
        </ul>
      </nav>
    </aside>
  )
}
