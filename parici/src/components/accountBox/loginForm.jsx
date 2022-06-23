import React, { useContext, useState } from "react";
import google from "../../assets/google.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import Axios from 'axios';
import {
  BoldLink,
  BoldSuccess,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  
  const [pseudoLog, setPseudoLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");



  const { switchToSignup } = useContext(AccountContext);
  const login = () => {
      Axios.post("http://localhost:3000/user/login", {
          pseudo: pseudoLog,
          password: passwordLog,
      })
      .then((response) =>{
          if(response.data.message){
            setLoginSuccess(response.data.message);
          } else{
            setLoginSuccess(response.data[0].pseudoLog);
          }
      });
  };
  return (
    <BoxContainer>
      <FormContainer>
      
      <BoldSuccess>{loginSuccess}</BoldSuccess>
        <Input type="text" placeholder="Pseudo" onChange={(e) => {setPseudoLog(e.target.value);}} />
        <Input type="password" placeholder="Password" onChange={(e) => {setPasswordLog(e.target.value);}} />
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Mot de passe oublié?</MutedLink>
        <SubmitButton type="submit" onClick={login}>Connexion</SubmitButton>
        <MutedLink href="#">Ou</MutedLink>
        <div className="blocIcon">
            <img className="imgicon" src={google} alt="GOOGLE ICON"/>
            <img className="imgicon" src={facebook} alt="facebook ICON"/>
            <img className="imgicon" src={twitter} alt="twitter ICON"/>
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