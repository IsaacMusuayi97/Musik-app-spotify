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
                token={"BQB2ays5SJgVtQ336IXtZLFYpdoxyyJEERrR2b6TOtoXWLRp-deb3CqhBNSRRC7CoSL1C9NX-pc5r_1MKFfhw0cSB4lWYGFVqaQR4qghgByDQUmZfRtdYhAxOXzYzy-njPFHsEUrdUl8He1TaE54eBwbjlZD9HgIGyL77qVQiPOgpZkuZu1otuMSkqnFv1IZbP7oBob0ulkNRBmg0TELf2O7hmvGljiBEAZQ3_iIYHnRPWIpD1gJURWpOBWnuEl-4lN1xcgLwk_0r2imvm-JJ26KuUdjKovK_7wxASH5io7x2203ZQnX5_4MQGMELdPFs5bsb-9JlCJqc1DSgR8"}
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
