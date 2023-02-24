import React, { useEffect } from 'react'

function FormInput({ type, classes, placeholder }) {
  return <input type={type} className={`input ${classes}`} placeholder={placeholder} />
}

export default FormInput
