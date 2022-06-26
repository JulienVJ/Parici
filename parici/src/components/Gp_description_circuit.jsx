import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import '../styles/gp_description.css';
import MyImage from "../assets/CircuitExampleImage.jpg";

export const GpCircuitDescription = ({ data }) => {

    const { route } = useParams();

    const toggleDescriptionCard = () => {
        const descriptionContainer = document.querySelector(".gp-description-card");
        const descriptionImage = document.querySelector(".gp-description-image");
        const descriptionText = document.querySelector(".gp-description-text");
        const subscribeCircuit = document.querySelector(".gp-subscription-btn");
        const DisplayHideArrow = document.querySelector(".arrow-hide-display");
        const CircuitImage = document.querySelector(".gp-circuit-steps");

        if (window.getComputedStyle(descriptionText).getPropertyValue("display") === "none") {
            descriptionImage.style.display = "block";
            descriptionText.style.display = "block";
            subscribeCircuit.style.display = "block";
            DisplayHideArrow.style.transform = "rotate(90deg)";
            descriptionContainer.style.height = '60%';
            descriptionImage.style.transition = "1s ease-in-out";
            descriptionImage.style.transform = "translateY(0%)";
            CircuitImage.style.opacity = "0.1";
            CircuitImage.style.transition = "0.5s ease";
            
        } else {
            CircuitImage.style.opacity = "1";
            CircuitImage.style.transition = "0.5s ease";
            descriptionImage.style.transition = "0s";
            descriptionContainer.style.transition = "1s ease";
            descriptionImage.style.transform = "translateY(100%)";
            descriptionText.style.display = "none";
            subscribeCircuit.style.display = "none";
            DisplayHideArrow.style.transform = "rotate(-90deg)";
            descriptionContainer.style.height = '10%';
        }
    }

    return (
        <>
            {data.filter(card => card.route === route).map((card, index) => (
                <main key={index} className='gp-description-main' >
                    <div className="gp-circuit-steps" style={{ backgroundImage: `url(${MyImage})` }}></div>
                    <div className="gp-card-container">
                        <div className="gp-description-card">
                            <span onClick={toggleDescriptionCard}><MdOutlineArrowForwardIos className="arrow-hide-display" /></span>
                            <div className='gp-description-text active'>
                                <h1>{card.title}</h1>
                                <p>{card.description}</p>
                                <ul>
                                    <li><span>Date:</span> {card.date}</li>
                                    <li><span>Horaires:</span> {card.time}</li>
                                    <li><span>Lieu de départ:</span> {card.departure}</li>
                                </ul>
                            </div>
                            <Link className="gp-subscription-btn" to={card.subscribe}>Je m'inscris</Link>

                        </div>
                        <div className='gp-description-image' style={{ backgroundImage: `url(${card.map})` }}></div>
                    </div>
                </main>
            ))}

        </>
    )

}

export default GpCircuitDescription;