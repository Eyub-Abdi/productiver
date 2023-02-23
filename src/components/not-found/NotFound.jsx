import React, { useEffect } from 'react'
import notfound from '../../img/not-found.png'
import './not-found.scss'

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <img className="not-found__img" src={notfound} alt="Not found image" />
        <div className="not-found__text">
          <h2 className="heading-secondary">Uh oh! this page is not found.</h2>
          <p className="paragraph">
            It looks like you are lost <span className="not-found__span">Please try another path or URL</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
