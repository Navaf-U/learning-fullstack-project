/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function BUTTON({className='',onClick,type,children}) {
  return (
    <div>
      <button onClick={onClick} className={`ms-10 border-2 border-green-400 ${className}`} type={type} >
        {children}
      </button>
    </div>
  )
}

export default BUTTON
