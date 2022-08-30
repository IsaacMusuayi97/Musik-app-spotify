import { useEffect, useState } from 'react';
import './App.css';
import Accueil from './components/Accueil';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login';
import Search from './components/Search';
import { Context } from './utils/Context';



function App() {
    const [token, setToken] = useState("")

  return (
    
      <div className='apps'>
        <Context.Provider value={{token,setToken}}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/accueil' element={<Accueil/>} />
          <Route path='/search' element={<Search />} />
        </Routes>
        </Context.Provider>
        

        {/* <Search /> */}
       
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