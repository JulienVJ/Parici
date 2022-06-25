import { Outlet } from 'react-router-dom';
import React from 'react';

const Home = () => {

  return (
    <div>
    <h1>Ce sera l'accueil</h1>
    <Outlet/>
    </div>
  );
};

export default Home;