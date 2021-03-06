import React from 'react'

const Alert = ({children,className}) => {
  return (
    <div className={`alert ${className}`}>
        {children}
    </div>
  )
}

export default Alert