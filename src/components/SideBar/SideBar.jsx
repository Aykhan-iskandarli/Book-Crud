import React from 'react'
import Logo from '../Logo/Logo'
import MenuList from './MenuList'


const SideBar = () => {
  return (
    <aside className='sideBar'>
        <nav className='navbar'>
            <Logo/>
            <MenuList/>
        </nav>
    </aside>
  )
}

export default SideBar