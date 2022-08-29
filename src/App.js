import { useEffect, useState } from 'react';
import './App.css';
import Accueil from './components/Accueil';
import SpotifyWebApi from 'spotify-web-api-js';
import { dataContext } from './utils/context';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import Accueil from './Accueil';
// import Recherche from './components/Recherche';
// import Playlists from './components/Playlists';
// import Sidebar from './components/Sidebar';

function App() {
  // const [token, setToken] = useState(""),
  //   spotify = new SpotifyWebApi();

  // useEffect(() => {
  //   const hash = window.location.hash;

  //   if (hash) {
  //     const token = hash.substring(1).split("&")[0].split("=")[1];
  //     setToken(token);

  //     spotify.getAccessToken(token)

  //     window.localStorage.setItem("token", token);
  //   }
  // }, []);
  return (
    // <dataContext.Provider value={{ token, setToken }}>
    //   <div>
    //     <Routes>
    //       <Route path='/' element={token ? <Accueil /> : <Login />} />
    //     </Routes>
    //   </div>

    // </dataContext.Provider>

    <div className='app'>
      <Sidebar/>
      <Body />
    </div>
  );
}

export default App;


   // <>
    // <Sidebar />
    //   <Router>
    //     <Switch>
    //       <Route exact path='/' component={Accueil} />
    //       <Route path='/recherche' component={Recherche} />
    //       <Route path='/playlists' component={Playlists} />
    //       <Redirect to="/" />
    //     </Switch>
    //   </Router>
    // </>