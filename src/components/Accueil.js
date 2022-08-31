import React,{useContext, useEffect,useState}from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import './accueil.css'
import SpotifyWebApi from 'spotify-web-api-js';
import { Context } from '../utils/Context';

function Accueil() {
   
  const globalData = useContext(Context)
   let spotify = new SpotifyWebApi();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const myToken = hash.substring(1).split("&")[0].split("=")[1];

      window.location.hash=""
      window.localStorage.setItem("token", myToken);
      globalData.setToken(myToken);
    }
  }, []);

    return (
        <div className='app'>
            <Sidebar />
            <Body />
        </div>
    )
}

export default Accueil
