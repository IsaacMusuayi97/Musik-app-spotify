import React from 'react'
import './Login.css'

function Login() {
    const handleclick = () => {
      const clientId = "f5168e714aa641e7bc3c31ef96a84a3d";
      const redirectUrl = "http://localhost:3001/";
      const apiUrl = "https://accounts.spotify.com/authorize";
      const scope = [
        "user-read-email",
        "user-read-private",
        "user-modify-playback-state",
        "user-read-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-position",
        "user-top-read",
    ]; 
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        " "
    )}&response_type=token&show_daialog=true`;
    }
    return (
        <div className='login'>
            <div className='login--img'>
                <img src='Login.png' />
            </div>

             <div> 
                 <button onClick={handleclick}>Connexion</button>
             </div>

        </div>
    )
}

export default Login
