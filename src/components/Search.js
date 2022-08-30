import React from 'react'
import Sidebar from './Sidebar'
import './Search.css'
import Recherche from './Recherche'

function Search() {
  return (
    <div className='search'>
      <Sidebar/>
      <Recherche/>
    </div>
  )
}

export default Search
