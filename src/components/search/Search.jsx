import React, { useEffect } from 'react'
import './search.scss'

function Search() {
  return (
    <div className="search-box">
      <input type="text" className="search-input" placeholder="Search" id="search" />
    </div>
  )
}

export default Search
