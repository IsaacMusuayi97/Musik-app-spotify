import React, { useContext } from 'react'
import { Context } from '../utils/Context'
import './body.css'


function Card({image,titre, uri}) {
    const globalData = useContext(Context)

    function PlayMusique() {
        globalData.setUriPlayer(uri)
    }

    return (
        <div onClick={PlayMusique}>

            <div className='song'>

                <img src={image} />

                <h1>{titre}</h1>
            </div>
        </div>
    )
}

export default Card
