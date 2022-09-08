import React from 'react'
import './Login.css'

function Login() {
    // "https://musik-app-spotify.vercel.app/accueil"
     // "http://localhost:3001/accueil"
    //  "http://localhost:3000/accueil"

     const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

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
                    {`${ process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${scope.join('%20')}&redirect_uri=${ REDIRECT_URI }&response_type=${ process.env.REACT_APP_RESPONSE_TYPE}&show_dialog=true`}>
                    <button>Connexion</button> </a>

            </div>

        </div>


    )
}

export default Login
