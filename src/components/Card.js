import React, { useContext } from 'react'
import { Context } from '../utils/Context'
import './body.css'


function Card({image,titre, uri}) {
    const searchPlay = useContext(Context)

    function PlayMusique() {
        searchPlay.setUriPlayer(uri)
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
