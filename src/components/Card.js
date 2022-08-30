import React from 'react'
import './body.css'

function Card({image,titre}) {

    return (
        <div>

            <div className='song'>

                <img src={image} />

                <h1>{titre}</h1>
            </div>
        </div>
    )
}

export default Card
