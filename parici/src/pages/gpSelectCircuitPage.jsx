import React from 'react';

import {  GpCircuitsCarrousel } from "../components/Gp_circuit_carrousel";
import { SearchGpCircuits } from "../components/Gp_search_container";



export function GpCircuitsPage(){

    return(
        <div className='gp-selected-page-container'>    
            <GpCircuitsCarrousel />
            <SearchGpCircuits />  
        </div>

    )
}

export default GpCircuitsPage;



