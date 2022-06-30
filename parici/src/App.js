import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Intro from "./pages/intro";

// Imports des composants liées aux circuits de groupe
import { GpCircuitsPage } from "./pages/gpCarrouselPage";
import { Navigation } from "./pages/navigation";
import { GpCircuitDescription } from "./components/Gp_description_circuit";
import { GpSubscribe } from "./components/Gp_subscribe";
import { MapA } from "./pages/MapA";
import  { Home } from "./pages/Accueil.jsx";
import { CreateCircuits } from "./pages/CreateCircuits";

// import { Map } from "./pages/Map";


// L'usage de react-icons est nécessaire pour afficher les icones de navigation et autres utilisées dans cette partie
// Il faut donc tout d'abord l'importer : npm install react-icons --save
// Regarder sur les liens d'import des icones dans la partie haute des pages et importer les modules : npm i <nom-du-module> 
// Exemple : import { IconName } from "react-icons/md"; 

// L'usage de ReactRouter est nécessaire (paquet npm => npm i react-router-dom)
// Pour comprendre l'utilisation de React Router et ici de BrowserRouter, lire cette ressource:
// https://github.com/remix-run/react-router/blob/main/docs/getting-started/installation.md 

function App() {

  const SliderData = [
    {
      id_gp_circuit: 1,
      map:
        'https://images.pexels.com/photos/5964505/pexels-photo-5964505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

      title: "Ballade des patissiers",
      departure: "Notre Dame",
      date: "22/06/2022",
      totalNumber: 12,
      Subscribers: 5,
      route: "ballade-des-patissiers",
      description: "Nous vous proposons une visite successive de plusieurs patissiers de renom issues d’une grande diversité de cultures, avec un départ depuis Notre Dame.",
      time: "de 11h30 à 17h30",
      subscribe: "inscription",

      zone: 12,
      duration: 5,
      theme: "food"
    },
    {
      id_gp_circuit: 2,
      map:
        'https://images.pexels.com/photos/7447291/pexels-photo-7447291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

      title: "Ballade des boulangeries",
      departure: "Bercy Village",
      date: "14/07/2022",
      totalNumber: 8,
      Subscribers: 3,
      route: "ballade-des-boulangers",
      description: "Nous vous proposons une visite successive de plusieurs boulangers de renom issues d’une grande diversité de cultures",
      time: "de 11h30 à 17h30",
      subscribe: "inscription",

      zone: 12,
      duration: 5,
      theme: "food"
    },
    {
      id_gp_circuit: 3,
      map:
        'https://images.pexels.com/photos/3801349/pexels-photo-3801349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

      title: "Ballade des cordonniers",
      departure: "Metro Saint-Mandé",
      date: "30/06/2022",
      totalNumber: 10,
      Subscribers: 5,
      route: "ballade-des-cordonniers",
      description: "Nous vous proposons une visite successive de plusieurs verriers de renom issus d’une grande diversité de cultures",
      time: "de 11h30 à 17h30",
      subscribe: "inscription",

      zone: 12,
      duration: 5,
      theme: "mancrafting"
    },
    {
      id_gp_circuit: 4,
      map:
        'https://images.pexels.com/photos/6764326/pexels-photo-6764326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Ballade des fleuristes",
      departure: "Notre Dame",
      date: "20/06/2022",
      totalNumber: 5,
      Subscribers: 5,
      route: "ballade-des-fleurites",
      description: "Nous vous proposons une visite successive de plusieurs fleuristes de renom issues d’une grande diversité de cultures",
      time: "de 11h30 à 17h30",
      subscribe: "inscription",

      zone: 12,
      duration: 5,
      theme: "mancrafting"
    },
    {
      id_gp_circuit: 5,
      map:
        'https://images.pexels.com/photos/6004788/pexels-photo-6004788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Ballade des restaurants",
      departure: "Notre Dame",
      date: "19/06/2022",
      totalNumber: 15,
      Subscribers: 5,
      route: "ballade-des-restaurants",
      description: "Nous vous proposons une visite successive de plusieurs restaurants de renom issues d’une grande diversité de cultures",
      time: "de 11h30 à 17h30",
      subscribe: "inscription",

      zone: 12,
      duration: 5,
      theme: "restaurant"
    }
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>

          {/* Pages d'intro (Mathias) qui présente et conduisent à la page d'accueil */}
          <Route index element={<Intro />} />
          {/* Routes relatives aux circuits en groupe */}
          <Route path="circuits-de-groupe/*" element={<GpCircuitsPage slides={SliderData} />} />
          <Route path="circuits-de-groupe/:route" element={<GpCircuitDescription data={SliderData} />} />
          <Route path="circuits-de-groupe/:route/:subscribe" element={<GpSubscribe data={SliderData} />} />
          
          {/* Page de Mia - on y va via "Commencer" de la page d'accueil faite par Mathias */}
          <Route path="Home" element={<Home/>} />
          <Route path="Circuits" element={<CreateCircuits/>} />
          <Route path="carte" element={<MapA/>} />
        </Route>
      </Routes>
    </div>

  )
}


export default App; 
