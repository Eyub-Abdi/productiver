import React, { useEffect } from 'react'
import './flashMessage.scss'

function FlashMessage({ messages }) {
  return (
    <div className="floating-alerts">
      {messages.map((msg, index) => {
        console.log(`FLASH MESSAGE ACTUAL MESSAGE ${msg}`)
        return (
          <div key={index} className="alert-success floating-alert">
            {msg}
          </div>
        )
      })}
    </div>
  )
}

export default FlashMessage
