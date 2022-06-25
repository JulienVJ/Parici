import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/homepage";
import { GpCircuitsPage } from "./pages/gpSelectCircuitPage";
import { Navigation } from "./pages/navigation";
// L'usage de ReactRouter est nécessaire (paquet npm => npm i react-router-dom)
// Pour comprendre l'utilisation de React Router et ici de BrowserRouter, lire cette ressource:
// https://github.com/remix-run/react-router/blob/main/docs/getting-started/installation.md 

function App() {

  return (
    
    <div className="App">
        <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        {/* Rappel: si je veux créer un ensemble de subroutes je fais 'circuits-de-groupe/*' */}
        <Route path="circuits-de-groupe" element={<GpCircuitsPage/>}/>
        </Route>
      </Routes>
    </div>
  
  )
}


export default App; 
