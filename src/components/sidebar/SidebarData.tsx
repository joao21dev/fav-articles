import { AiFillHome } from 'react-icons/ai'
import { ISidebarItem } from '../../models/Models'
import { BiTrendingUp } from 'react-icons/bi'

export const SidebarData: ISidebarItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
  },
  {
    title: 'Trending',
    path: '/trending',
    icon: <BiTrendingUp />,
  },
]
