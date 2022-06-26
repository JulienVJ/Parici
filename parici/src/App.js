import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/homepage";
import { GpCircuitsPage } from "./pages/gpCarrouselPage";
import { Navigation } from "./pages/navigation";
import { GpCircuitDescription } from "./components/Gp_description_circuit";
import { GpSubscribe } from "./components/Gp_subscribe";
import { GpFilterPage } from "./pages/gpFilterPage";

// L'usage de ReactRouter est nécessaire (paquet npm => npm i react-router-dom)
// Pour comprendre l'utilisation de React Router et ici de BrowserRouter, lire cette ressource:
// https://github.com/remix-run/react-router/blob/main/docs/getting-started/installation.md 

function App() {
  
  const SliderData = [
    {
        id_gp_circuit:1,
        map:
            'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        
        title: "Ballade des patissiers",
        departure: "Notre Dame",
        date: "22/06/2022",
        totalNumber: 12,
        Subscribers:5,
        route: "ballade-des-patissiers",
        description:"Nous vous proposons une visite successive de plusieurs patissiers de renom issues d’une grande diversité de cultures, avec un départ depuis Notre Dame.",
        time: "de 11h30 à 17h30",
        subscribe: "inscription",

        zone: 12,
        duration: 5,
        theme: "food"
        },
    {
            id_gp_circuit:2,
            map:
            'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
        
            title: "Ballade des boulangeries",
            departure: "Bercy Village",
            date: "14/07/2022",
            totalNumber: 8,
            Subscribers:3,
            route: "ballade-des-boulangers",
            description:"Nous vous proposons une visite successive de plusieurs boulangers de renom issues d’une grande diversité de cultures",
            time: "de 11h30 à 17h30",
            subscribe: "inscription",

            zone: 12,
            duration: 5,
            theme: "food"
    },
    {
            id_gp_circuit:3,
            map:
            'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',

            title: "Ballade des cordonniers",
            departure: "Notre Dame",
            date: "30/06/2022",
            totalNumber: 10,
            Subscribers:5,
            route: "ballade-des-cordonniers",
            description:"Nous vous proposons une visite successive de plusieurs cordonniers de renom issues d’une grande diversité de cultures",
            time: "de 11h30 à 17h30",
            subscribe: "inscription",

            zone: 12,
            duration: 5,
            theme: "mancrafting"
    },
    {
            id_gp_circuit:4,
            map:
            'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
            title: "Ballade des fleuristes",
            departure: "Notre Dame",
            date: "20/06/2022",
            totalNumber: 5,
            Subscribers:5,
            route: "ballade-des-fleurites",
            description:"Nous vous proposons une visite successive de plusieurs fleuristes de renom issues d’une grande diversité de cultures",
            time: "de 11h30 à 17h30",
            subscribe: "inscription",

            zone: 12,
            duration: 5,
            theme: "mancrafting"
    },
    {
            id_gp_circuit:5,
            map:
            'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
            title: "Ballade des restaurants",
            departure: "Notre Dame",
            date: "19/06/2022",
            totalNumber: 15,
            Subscribers:5,
            route: "ballade-des-restaurants",
            description:"Nous vous proposons une visite successive de plusieurs restaurants de renom issues d’une grande diversité de cultures",
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
          <Route index element={<Home />} />
          {/* Rappel: si je veux créer un ensemble de subroutes je fais 'circuits-de-groupe/*' */}
          <Route path="circuits-de-groupe/filtres" element={<GpFilterPage />} />
          <Route path="circuits-de-groupe/*" element={<GpCircuitsPage slides={SliderData} />} />
          <Route path="circuits-de-groupe/:route" element={<GpCircuitDescription data={SliderData}/>} />
          <Route path="circuits-de-groupe/:route/:subscribe" element={<GpSubscribe data={SliderData}/>} />
        </Route>
      </Routes>
    </div>

  )
}


export default App; 
