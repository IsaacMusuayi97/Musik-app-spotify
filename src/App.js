import { useEffect, useState } from 'react';
import './App.css';
import Accueil from './components/Accueil';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login';
import Search from './components/Search';
import { Context } from './utils/Context';
import Footer from './components/Footer';


function App() {
  const [token, setToken] = useState(""),
  [uriPlayer, setUriPlayer] = useState("")

  return (

    <div className='apps'>
      <Context.Provider value={{ token, setToken, uriPlayer, setUriPlayer }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/accueil' element={<Accueil />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </Context.Provider>

     


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