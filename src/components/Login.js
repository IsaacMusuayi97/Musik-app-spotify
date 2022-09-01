import React from 'react'
import './Login.css'

function Login() {

    const CLIENT_ID = "f5168e714aa641e7bc3c31ef96a84a3d"
    const REDIRECT_URI = "https://musik-app-spotify.vercel.app/accueil"
    // "http://localhost:3001/accueil"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const scope = [
        "user-read-email",
        "ugc-image-upload",
        "user-read-private",
        "user-modify-playback-state",
        "user-read-playback-state",
        "user-read-currently-playing",
        "streaming",
        "user-read-recently-played",
        "user-read-playback-position",
        "user-top-read",
        "app-remote-control",
        "playlist-read-collaborative",
        "playlist-modify-public",
        "playlist-read-private",
        "playlist-modify-private",
        "user-library-modify",
        "user-library-read",
        "user-follow-modify",
        "user-follow-read",
    ]

    return (
        <div className='login'>
            <div className='login--img'>
                <img src='Login.png' />
            </div>

            <div>
                <a href=
                    {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${scope.join('%20')}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true`}>
                    <button>Connexion</button> </a>

            </div>

        </div>


    )
}

export default Login
