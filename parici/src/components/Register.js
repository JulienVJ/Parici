import React from 'react'
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"


export default function Form(){
    return(
        <section>
            <div className="register">
            <span class="material-icons">arrow_back</span>
                <div className="col-1">
                    
                    <h2>Inscription</h2>
                    
                    <form id="form" className='flex flex-col'>
                        
                        <input type="text" placeholder="username" />
                        <input type="text" placeholder="password" />
                    
                        
                        <div className="blocbtn">
                            <button className="btn">Valider <span class="material-icons">arrow_forward</span></button>
                            <p>Ou</p>
                            <div className="blocIcon">
                                <img className="imgicon" src={google} alt="GOOGLE ICON"/>
                                <img className="imgicon" src={facebook} alt="facebook ICON"/>
                                <img className="imgicon" src={twitter} alt="twitter ICON"/>
                            </div>
                        </div>
                        
                    </form>
                    
                </div>
                
            </div>
        </section>
    )
}