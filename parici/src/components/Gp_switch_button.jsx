import React from "react";
import "../styles/switch-button.css";

const SwitchButton = () => {


    const toLeftButton = () => {
        const leftButton= document.querySelector(".left-swbtn");
        const rightButton = document.querySelector(".right-swbtn");
        const CircuitImage = document.querySelector(".gp-circuit-map");
        const CircuitSteps = document.querySelector(".gp-circuit-steps");

        leftButton.classList.add('active');
        rightButton.classList.remove('active');
        CircuitImage.style.display = "block";
        CircuitImage.style.opacity="1";
        CircuitSteps.style.display="none";

    }

    const toRightButton = () => {
        const rightButton = document.querySelector(".right-swbtn");
        const leftButton= document.querySelector(".left-swbtn");
        const CircuitSteps = document.querySelector(".gp-circuit-steps");
        const CircuitImage = document.querySelector(".gp-circuit-map");

        rightButton.classList.add('active');
        leftButton.classList.remove('active');
        CircuitSteps.style.display="block";
        CircuitSteps.style.opacity = "1";
        CircuitImage.style.display="none";
        CircuitImage.style.opacity="0.1";
    }

    return(
        
        <section className="switch-buttons-section">
        <div className="buttons-container">
            <div className="left-swbtn active" onClick={toLeftButton}>Circuit</div>
            <div className="right-swbtn" type="button" onClick={toRightButton}>Commerces</div>
        </div>
        </section>
    )
}

export default SwitchButton;