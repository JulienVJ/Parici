/* import React /{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function Profile({pseudo}) {
     let { id_user } = useParams();
     useEffect(() =>{
        axios.get(`http://localhost:3000/user/profile/${id_user}`)
        .then((response) =>{
            setPseudo(response.data.pseudo);
        })
    }, []);
    return (
        <div className="profilePageContainer">
        <div className="InfoUser">
            <h1>Pseudo: {pseudo} </h1>
        </div>
        <div className="listOfCircuit">
        </div>

        </div>
    )
}


export default Profile; */

import React from "react"
export class Profile extends React.Component {
    
    render()
    {
        const id = new URLSearchParams(window.location.search).get('profile')
        return(
            <>
            <div className="profilePageContainer">
            <div className="InfoUser">
                 */ <h1>Pseudo: {id} </h1>
            </div>
            <div className="listOfCircuit">
            </div>
    
            </div>
            </>
        )
    }
}