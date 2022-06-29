import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Circuits(){
    const [listOfCircuits, setListOfCircuits] = useState([]);

    
    useEffect(() => {
        axios.get("http://localhost:3000/circuit/allCircuit").then((response) =>{
            setListOfCircuits(response.data.circuits)
           
        });
    }, []);

    return (
        <div>
            {listOfCircuits.map((value, key) =>{
                const magasin= value.magasins.map(magasin => magasin.recordId_magasin)
                return (
                    <div className="circuits">
                        <Link to={`/CircuitDT/${value.id_circuit}`}>{value.name_circuit}</Link>
                        <div> {value.description_circuit} </div>
                        <div> {value.arrondissement} </div>

                    </div>
                );
            })}
        </div>
    );
}

export default Circuits;