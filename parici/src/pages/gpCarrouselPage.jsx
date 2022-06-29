import React from 'react';
import GpCircuitsSlider from "../components/Gp_circuit_carrousel";
import SearchGpCircuits from "../components/Gp_search_container";

// Page où il y a le carrousel et en bas "Rechercher un circuit"
export function GpCircuitsPage({slides}){
   

    return(
        <div className='gp-selected-page-container'> 
  
            <GpCircuitsSlider  slides={slides} />
            <SearchGpCircuits  />  
        </div>

    )
}

export default GpCircuitsPage;



