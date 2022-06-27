import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/accountBox/loginForm";
const Header = () => {
    return ( 
        <div className = "header" >
        <nav>
        <ul>
        <Link to = "/"className = {
            (nav) => (nav.isActive ? "nav-active" : "") } >
        <li> Accueil </li> 
        </Link>
        {!sessionStorage.getItem('accessToken') && (
            <>
                <Link to = "/login"className = {(nav) => (nav.isActive ? "nav-active" : "") } >
                    <li> Connexion </li> 
                </Link> 
            </>
        )}
         {sessionStorage.getItem('accessToken') && (
            <>
                <Link to = "/login"className = {(nav) => (nav.isActive ? "nav-active" : "") } >
                    <li> logout </li> 
                </Link> 
            </>
        )}
        </ul> 
        </nav> 
        <h1> Bienvenue </h1> 
        </div>
    );
};

export default Header;