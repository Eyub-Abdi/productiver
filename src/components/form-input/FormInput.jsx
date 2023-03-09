import React, { useEffect } from 'react'

function FormInput({ type, classes, placeholder, onChange, value, focus }) {
  return <input onChange={onChange} value={value} autoFocus={focus ? true : false} type={type} className={`input ${classes}`} placeholder={placeholder} />
}

export default FormInput
