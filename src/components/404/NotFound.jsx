import React from 'react'
import { Link } from 'react-router-dom'
import not_found from "../../assets/images/not_found.svg"

const NotFound = () => {
  return (
   <>
   <Link to="/" className='back-link'>Geri Dön</Link>
   <div className="notFound-text">
       <h3>Xəta baş verdi</h3>
   </div>
    <div className='notFound'>
        <div className="notFound-img">
            <img src={not_found} alt="" />
        </div>
    </div>
   </>
  )
}

export default NotFound