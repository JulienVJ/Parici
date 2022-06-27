import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function Profile() {
    let { id_user } = useParams();
    const [pseudo, setPseudo] = useState("")
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


export default Profile;