/*  */
import "./App.css";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import styled from "styled-components";
import Home from './pages/Home';
import Map from './Map';
import CreateCircuits from './CreateCircuits';




import { AccountBox } from "./components/accountBox";
import {AuthContext} from './helpers/AuthContext';
import { useState } from 'react';
import {Profile} from './pages/Profile';


const AppContainer = styled.div`

height: 100%;
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;

function App() {
  const [authState, setAuthState] = useState({
    pseudo: "nani",
    id_user: 0,
    status: false,
  });

  const logout = () =>{
    localStorage.removeItem("accessToken");
    setAuthState({pseudo: "", id_user: 0, status: false});
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
    <BrowserRouter>
      {/*   <div className="navbar">
          <Link to = "/">Accueil</Link>
          {!localStorage && (
            <>
              <Link to = "/login">Connexion</Link>
            </>
          )}
          {!localStorage && (
            <>
            <button onClick={logout} >Logout</button>
            </>
          )}
            
          
          
          <Link to = "/">Circuit {authState.pseudo}</Link>
          <Link to = "/profile/id">Circuit {authState.pseudo}</Link>
          <h1>{authState.pseudo}</h1>
           
         

        </div> */}
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id_user" element={<Profile pseudo={authState.pseudo}/>} />
      <Route path="/login" element={<div className="bodycontain"><AppContainer><AccountBox /></AppContainer></div>} />
    <Route path="/Map" element={<Map />} />
    <Route path="/CreateCircuits" element={<CreateCircuits />} />




    </Routes>
  </BrowserRouter>
  </AuthContext.Provider>
  </div>
  );
}

export default App;
