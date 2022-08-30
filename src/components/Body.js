import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import SpotifyWebApi from 'spotify-web-api-js';
import { Context } from '../utils/Context';

function Body() {
    const {setToken,token}=useContext(Context)
    let spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(token);
    const [item,setItem]=useState([])
    useEffect(()=>{
        // spotifyApi.getMe().then(res=>{
        //     console.log(res);
        // })
        spotifyApi.getMyRecentlyPlayedTracks().then(res=> {
            setItem(res.items)
           
        })
        .catch(err=>console.log(err))
    },[token])
    console.log('recenmment ', item)
    return (
        <div className='container--body' >
               <h1 className='title'>Ecoutés récemment</h1>
               <div className='musique'>
                   {item.map(data=>{
                       return(
                        <Card titre={data.track.name} image={data.track.album.images[0].url}/>
                       )
                   })}
               
               </div>

           
        </div>
    )
}

export default Body
