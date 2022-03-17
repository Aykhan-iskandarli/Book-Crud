import React from 'react'
import Gif from "../../assets/images/loading.gif"

const Loading = () => {
  return (
    <div className='loading'>
        <div className="loading-img">
            <img src={Gif} alt="" />
        </div>
    </div>
  )
}

export default Loading