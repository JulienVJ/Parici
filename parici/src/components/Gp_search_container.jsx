import React from 'react';
import "../styles/Gp_search_container.css";
import { TbAdjustments } from "react-icons/tb";
import { Link } from "react-router-dom";

export const SearchGpCircuits = () => {

    return(
        <div className="gp-search-circuit-wrapper">
            <div>
                <h1>Rechercher un groupe</h1>
                <div className="gp-filter-section">
                    <span><Link to="filtres"><TbAdjustments className="gp-filter-circuits" /></Link></span>
                </div>
            </div>

            <div className="gp-image-container">
               
            </div>  
        </div>
    )

}

export default SearchGpCircuits;