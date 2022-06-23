import { Outlet } from 'react-router-dom';

import  GpCircuitsCarrousel from "../components/Gp_circuit_carrousel";

const Home = () => {

  return (
    <div>
    <GpCircuitsCarrousel/>
    <Outlet/>
    </div>
  );
};

export default Home;