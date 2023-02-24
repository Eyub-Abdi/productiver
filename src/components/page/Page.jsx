import React, { useEffect } from 'react'
import './page.scss'

function Page({ children, title }) {
  useEffect(() => {
    document.title = `Productiver | ${title}`
  }, [document.title])
  return <div className="container">{children}</div>
}

export default Page
