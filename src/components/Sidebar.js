import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Context } from '../utils/Context';
import './sidebar.css'


function Sidebar() {
    const {setToken,token}=useContext(Context)
  
    function deconnexion () {
        window.localStorage.clear()
        setToken("")
    }
    return (
        <div className='container'>
            <img src='Logo.png' className='logo' />
            <h1 className='bibliotheque'>Bibliothèque</h1>
            <div className='container--pages'>
                
                <NavLink style={{textDecoration: "none"}} to='/accueil' activeClassName="active"> 
                <div className='accueil'>
                    <img src='icons8-accueil-24.png' /> <div>Accueil</div>   </div></NavLink>   
              
            <NavLink style={{textDecoration: "none"}} to='/search' activeClassName="active">
            <div className='accueil'>
                    <img src='icons8-chercher-30.png' />
                    <div>Recherche</div>
                </div>
            </NavLink>
                <div className='accueil'>
                    <img src='icons8-playlist-50.png' />
                    <div>Playlists</div>
                </div>
            </div>
         <NavLink style={{textDecoration: "none"}} to='/'>
         <div onClick={deconnexion} className='deconnexion--container'>
               Deconnexion
            </div>
         </NavLink>
        </div>
    )
}

export default Sidebar

