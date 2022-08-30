import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import SpotifyWebApi from 'spotify-web-api-js';
import { Context } from '../utils/Context';

function Body() {
    const { setToken, token } = useContext(Context)
    let spotifyApi = new SpotifyWebApi();
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
    console.log('recenmment ', item)

    useEffect(() => {
         spotifyApi.getMe().then(res=>{
            setUser(res.display_name)
            console.log('jj',user);
        })
        .catch(err => console.log(err))
    }, [token])
    console.log("isaac", user)
    return (
        <div className='container--body' >
            <div className='container--user'>
           
               <div> </div>
                <div className='user'>
                    <img src='Manager.png' />
                    
                            <h5>{user}</h5>
                   
                </div>

            </div>
            <h1 className='title'>Ecoutés récemment</h1>
            <div className='musique'>
                {item.map(data => {
                    return (
                        <Card titre={data.track.name} image={data.track.album.images[0].url} />
                    )
                })}

            </div>


        </div>
    )
}

export default Body
