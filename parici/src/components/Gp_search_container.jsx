import React from 'react';
import "../styles/Gp_search_container.css";
import { TbAdjustments } from "react-icons/tb";

export const SearchGpCircuits = () => {

    return(
        <div className="gp-search-circuit-wrapper">
            <div>
                <h1>Rechercher un groupe</h1>
                <div className="gp-filter-section">
                    <h2>Mes filtres:</h2>
                    <span><TbAdjustments /></span>
                </div>
            </div>

            <div className="gp-image-container">
               
            </div>  
        </div>
    )

}

export default SearchGpCircuits;