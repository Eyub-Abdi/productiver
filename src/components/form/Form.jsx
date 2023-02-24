import React, { useEffect } from 'react'
import './form.scss'

function Form({ classes, children }) {
  return (
    <div className="form-box">
      <form className={`form ${classes}`}>{children}</form>
    </div>
  )
}

export default Form
