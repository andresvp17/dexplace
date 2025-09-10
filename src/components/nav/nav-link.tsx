import { Link } from 'react-router'

type props = {
  color: string
  name: string
  navTo: string
  onClose: () => void
}

export const NavLink = ({ color, name, navTo, onClose }: props) => {
  return (
    <li>
      <Link
        className={`md:hover:scale-105 transition rounded-md block w-[110px] text-center link-background font-semibold text-slate-200 px-5 py-3 ${color}`}
        to={`${navTo}`}
        onClick={onClose}
      >
        {name}
      </Link>
    </li>
  )
}
