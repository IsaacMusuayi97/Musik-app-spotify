import React, { useContext, useState } from 'react'
import { Context } from '../utils/Context'
import './Recherche.css'
function Recherche() {
  const globalData = useContext(Context),
  [search, setSearch] = useState('')
  return (
    <div className='container--body'>
        <div className='container-search'> 
           <img src='Vector (3).png' />
           <input  type="text"/>
        </div>
    </div>
  )
}

export default Recherche
