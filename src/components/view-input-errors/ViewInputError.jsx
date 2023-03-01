import React, { useEffect } from 'react'
import './view-input-error.scss'
// ICON
import { ImWarning } from 'react-icons/im'

function ViewInputError({ errorMessage }) {
  return (
    <div className=" input-error alert alert-danger">
      <ImWarning className="input-error__icon" /> <span className="input-error__content">{errorMessage}</span>
    </div>
  )
}

export default ViewInputError
