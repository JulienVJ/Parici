import React from 'react';
import GpCircuitsCard from "../components/Gp_circuit_carrousel";
import SearchGpCircuits from "../components/Gp_search_container";

export function GpCircuitsPage({slides}){

    return(
        <div className='gp-selected-page-container'>    
            <GpCircuitsCard  slides={slides} />
            <SearchGpCircuits />  
        </div>

    )
}

export default GpCircuitsPage;



