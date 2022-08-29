import React from 'react'
import './sidebar.css'

function Sidebar() {
    return (
        <div className='container'>
            <img src='Logo.png' className='logo' />
            <h1 className='bibliotheque'>Bibliothèque</h1>
            <div className='container--pages'>
                <div className='accueil'>
                    <img src='Group.png' />
                    <div>Accueil</div>
                </div>
                <div className='accueil'>
                    <img src='Vector (1).png' />
                    <div>Recherche</div>
                </div>
                <div className='accueil'>
                    <img src='Vector (2).png' />
                    <div>Playlists</div>
                </div>
            </div>
            <div className='deconnexion--container'>
               Deconnexion
            </div>
        </div>
    )
}

export default Sidebar

