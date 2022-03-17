import React from 'react'
import { NavLink } from 'react-router-dom'
import {BiCommentAdd,BiHome} from "react-icons/bi"

const MenuList = () => {
  return (
    <ul className='menuList'>
        <li><NavLink to="/" activeclassname="active">< BiHome/> Kitablar</NavLink></li>
        <li><NavLink to="addBook" activeclassname="active"><BiCommentAdd/> Əlavə Et</NavLink></li>
    </ul>
  )
}

export default MenuList