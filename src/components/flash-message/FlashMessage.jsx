import React, { useEffect } from 'react'
import './flashMessage.scss'

function FlashMessage() {
  return (
    <div className="floating-alerts">
      <div className="alert-success floating-alert">New user has been created successfully</div>
    </div>
  )
}

export default FlashMessage
