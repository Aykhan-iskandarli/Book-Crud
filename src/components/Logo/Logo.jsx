import React from 'react'
import {FaBookMedical} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='logo-container'>
        <Link to="/" >
            <FaBookMedical/>
            <span>Book App</span>
        </Link>
    </div>
  )
}

export default Logo