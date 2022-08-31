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
                token={"BQD9eRc4IrH_sICY6COJaeMHHVeOil82EIGnZF44QbqpwPK6jc4EC1GPlirrMj7DorYX5WLlXkojyLj_phvnEel4iq-zaKU-ukeQODnXozyMzhnP_domc_2XD13ygmhdayjxYBMEagzpp-lOtT8GBaeJi0n6GDSCM-MKXsDjXIFYal1L9f3atETMNGXBtAmWvPxstfNHB2bBH804xYvu4IPO1nQHNAbtSHEccA63YgEfrSB1kMpjKktvkAGzBWxwu7Oyyz-LOhR8wqDuK9CdADQJ82Rzp7iqGVeam3gj6SeYplo-DhOd9b_9x4_nQdb8gMk0SEks8UnL2QCLFcw"}
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
