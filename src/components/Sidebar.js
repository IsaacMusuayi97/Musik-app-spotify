import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
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
                
                <Link to='/accueil'> 
                <div className='accueil'>
                    <img src='Group.png' /> <div>Accueil</div>   </div></Link>   
              
            <Link to='/search'>
            <div className='accueil'>
                    <img src='Vector (1).png' />
                    <div>Recherche</div>
                </div>
            </Link>
                <div className='accueil'>
                    <img src='Vector (2).png' />
                    <div>Playlists</div>
                </div>
            </div>
         <Link to='/'>
         <div onClick={deconnexion} className='deconnexion--container'>
               Deconnexion
            </div>
         </Link>
        </div>
    )
}

export default Sidebar

