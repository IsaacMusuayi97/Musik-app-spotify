import React, { useContext } from 'react'
import { Context } from '../utils/Context'
import './Cards.css'

function Cards(props) {
    const globalData = useContext(Context)

    function PlayMusique() {
        globalData.setUriPlayer(props.uri)
    }
  return (
    <div className='name--contain' onClick={PlayMusique}>
      <img src={props.img} />
      <h1> {props.name} </h1>
    </div>
  )
}

export default Cards
