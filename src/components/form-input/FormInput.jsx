import React, { useEffect } from 'react'

function FormInput({ type, classes, placeholder, onChange, value }) {
  return <input onChange={onChange} value={value} type={type} className={`input ${classes}`} placeholder={placeholder} />
}

export default FormInput
