import React, { useContext, useEffect, useState } from 'react'
import './Footer.css'
import SpotifyPlayer from "react-spotify-web-playback";
import { Context } from '../utils/Context';
function Footer() {
    const globalData = useContext(Context),
    
    
        [play, setPlay] = useState(false)

    useEffect(() => {
        setPlay(true)
    }, [globalData.uriPlayer])

    return (

        <div className='footer'>
            <SpotifyPlayer
                token={globalData.token}
                uris={[globalData.uriPlayer]}
                play={play}
                autoPlay={true}
                callback={(value)=> {
                    !value.isPlaying ? setPlay(false) : setPlay(true)
                }}
            />
        </div>
    )
}

export default Footer
