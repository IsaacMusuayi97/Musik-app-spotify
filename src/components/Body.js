import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'

import { Context } from '../utils/Context';

function Body() {
    const { setToken, token, spotifyApi } = useContext(Context)
   
    spotifyApi.setAccessToken(token);
    const [item, setItem] = useState([]),
      [user, setUser] = useState('')
    useEffect(() => {
        // spotifyApi.getMe().then(res=>{
        //     console.log(res);
        // })
        spotifyApi.getMyRecentlyPlayedTracks().then(res => {
            setItem(res.items)

        })
            .catch(err => console.log(err))
    }, [token])

    useEffect(() => {
         spotifyApi.getMe().then(res=>{
            setUser(res.display_name)
        })
        .catch(err => console.error(err))
    }, [token])
  
    return (
        <div  className='container--body' >
            <div className='container--user'>
           
               <h1 className='title'>Ecoutés récemment</h1>
                <div className='user'>
                    <img src='Manager.png' />
                    
                            <h5>{user}</h5>
                   
                </div>

            </div>
            
            <div className='musique'>
                {item.map(data => {
                    return (
                        <Card titre={data.track.name} image={data.track.album.images[0].url} uri={data.track.uri}/>
                    )
                })}

            </div>


        </div>
    )
}

export default Body
