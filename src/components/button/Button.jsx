import React, { useEffect } from 'react'
import './button.scss'

function Button({ classes, children, onClick }) {
  return (
    <button className={`btn ${classes}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
