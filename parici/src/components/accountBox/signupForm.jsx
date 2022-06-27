import React, { useContext, useState } from "react";
import google from "../../assets/google.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import Axios from 'axios';
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

export function SignupForm(props) {

  const [pseudoReg, setPseudoReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const { switchToSignin } = useContext(AccountContext);
  const register = () => {
    const data = { pseudo: pseudoReg, password: passwordReg };
      Axios.post("http://localhost:3000/user/register",{
          pseudo: pseudoReg,
          password: passwordReg,
      })
      .then((response) =>{
        if(response.data.error) {
            alert(response.data.error);
        } else {
            /* localStorage.setItem("accessToken", response.data.accessToken); */
            switchToSignin()
        }
        
        
      });
      
  };
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Pseudo" onChange={(e) => {setPseudoReg(e.target.value);}}  />
        <Input type="password" placeholder="Password" onChange={(e) => {setPasswordReg(e.target.value);}} />
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" onClick={register} >Confirmer</SubmitButton>
        <MutedLink href="#">Ou</MutedLink>
        <div className="blocIcon">
            <img className="imgicon" src={google} alt="GOOGLE ICON"/>
            <img className="imgicon" src={facebook} alt="facebook ICON"/>
            <img className="imgicon" src={twitter} alt="twitter ICON"/>
        </div>
      </FormContainer>
      
      
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Vous avez déjà un compte?
        <BoldLink href="#" onClick={switchToSignin}>
          Connexion
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}


   /* const formData = new FormData();
      formData.append("pseudo", this.pseudoReg)
      formData.append("password", this.passwordReg) */

   /*    Axios.post("http://localhost:3000/user/register", formData)
      .then((response) =>{
          console.log("créer")
          console.log(response);
      }); */