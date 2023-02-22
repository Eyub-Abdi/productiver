import React, { useEffect } from 'react'
import './flashMessage.scss'

function FlashMessage() {
  return (
    <div className="floating-alerts">
      <div className="alert-warning floating-alert">New user has been created successfully</div>
    </div>
  )
}

export default FlashMessage
