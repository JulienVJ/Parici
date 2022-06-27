import React, { useContext, useState } from "react";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import Axios from 'axios';
import { AuthContext } from "../../helpers/AuthContext";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";



export function LoginForm(props) {

  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const { setAuthState } = useContext(AuthContext)


  const { switchToSignup } = useContext(AccountContext);

  const getHeaders = () => {
    let headers = {};
    if (localStorage.getItem("accessToken")) {
      headers = {
        accessToken: localStorage.getItem("accessToken")
      }
    }
    return headers;
  }

  const login = (e) => {
    e.preventDefault();
    
    Axios.post("http://localhost:3000/user/auth", {
      pseudo: pseudo,
      password: password
    }, {
      headers: getHeaders()
    }) 
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.data.accessToken);
          setAuthState({ pseudo: response.data.pseudo, id_user: response.data.id_user, status: true });
        }
      });

  };
  /*  const login = () => {
     const data = { pseudo: pseudo, password: password };
     Axios.post("http://localhost:3000/user/login", {
         pseudo: pseudoLog,
         password: passwordLog,
     })
     .then((response) =>{
       console.log(response)
         if(response.data.error) {
             alert(response.data.error);
         } else {
             localStorage.setItem("accessToken", response.data);
             setAuthState({pseudo: response.data.pseudo, id_user: response.data.id_user, status: false});
         }
     });
 }; */

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Pseudo" onChange={(e) => { setPseudo(e.target.value); }} />
        <Input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Mot de passe oublié?</MutedLink>
        <SubmitButton type="submit" onClick={login}>Connexion</SubmitButton>
        <MutedLink href="#">Ou</MutedLink>
        <div className="blocIcon">
          <img className="imgicon" src={google} alt="GOOGLE ICON" />
          <img className="imgicon" src={facebook} alt="facebook ICON" />
          <img className="imgicon" src={twitter} alt="twitter ICON" />
        </div>
      </FormContainer>




      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Pas encore de compte?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          s'inscrire
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}