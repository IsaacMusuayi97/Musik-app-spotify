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
                token={"BQBZZUB1ekHXlckdivlmG2scfD9t1QB35fGwNeEV3xGyOr_6iOWzd_pjBvRZ0hkpnlzcRkOhqVFO2SgKI951bKwtJFu4FESeUAPCXFDmJEEXsstAVATV9Sjbb5iHgpgItsSvj_oWUK50T_dXCBDM_cT1Z5SIKYkzANRuc86t_3gxcMcdSYUGftIOdn06BIAT9rrB2Wl5n0MHVShX0UapkGoYFGPc_pD7miHsVHKCtGxkdYaOxp2aSL1McwiCi9sPGdnhPUtdzU8hAsVWSI0VJt2AbsXBRLxDkk8CDRq6ohOtW3Iw9FLmlYZVv2tLCUYXq2bG485vbwskTiovShU"}
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
