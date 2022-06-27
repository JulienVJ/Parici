import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import '../styles/gp_description.css';
import MyImage from "../assets/CircuitExampleImage.jpg";
import GpShopsSlider from "./Gp_circuits_shops";
import SwitchButton from "./Gp_switch_button";

export const GpCircuitDescription = ({ data }) => {

    const SliderShops = [
        {
            id_gp_shop:1,
            image:'https://images.pexels.com/photos/9242434/pexels-photo-9242434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: "Patisserie de Notre Dame",
            route: "https://www.alacroixparis.com/",
            description:"La patisserie de Notre Dame propose des croissants originaux à découvrir",
            time: "de 9h00 à 17h30",
            step: "10h",
            zone: 12,
            theme: "food"
            },
        {
            id_gp_shop:1,
            image:'https://images.pexels.com/photos/5223580/pexels-photo-5223580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            
            title: "Patisserie Japonaise",
            route: "https://patisserietomo.fr/",
            description:"La patisserie de Saint Germain propose des mets délicats issu des traditions Japonaises",
            time: "de 11h30 à 17h30",
            step: "12h",
            zone: 12,
            theme: "food"
        },
        {
            id_gp_shop:1,
            image:'https://images.pexels.com/photos/9863601/pexels-photo-9863601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: "patisserie Hao",
            route: "http://www.myumyu.fr/",
            description:"La patisserie de Notre Dame propose des mets délicats issu des traditions chinoise",
            time: "de 11h30 à 17h30",
            step: "13h30",
            zone: 12,
            theme: "food"
        },
        {
            id_gp_shop:1,
            image:'https://images.pexels.com/photos/8820960/pexels-photo-8820960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: "Patisserie Russe",
            route: "https://www.prestigerusse.com/",
            description:"La patisserie de Notre Dame propose des mets délicats issu des traditions Russes",
            time: "de 11h30 à 17h30",
            step: "15h",
            zone: 12,
            theme: "food"
        },
        {
            id_gp_shop:1,
            image:'https://images.pexels.com/photos/6196818/pexels-photo-6196818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: "Patisserie des chats",
            route: "https://www.lejardinsucre.fr/",
            description:"La patisserie des chats propose de manger entouré par des chats curieux",
            time: "de 11h30 à 17h30",
            step: "18h",
            zone: 12,
            theme: "food"
        }
    ];

    const { route } = useParams();

    const toggleDescriptionCard = () => {
        const MainContainer = document.querySelector(".gp-description-main");

        const descriptionContainer = document.querySelector(".gp-description-card");
        const descriptionImage = document.querySelector(".gp-description-image");
        const descriptionText = document.querySelector(".gp-description-text");
        const subscribeCircuit = document.querySelector(".gp-subscription-btn");
        const DisplayHideArrow = document.querySelector(".arrow-hide-display");
        const CircuitImage = document.querySelector(".gp-circuit-map");
        const CircuitSteps = document.querySelector(".gp-circuit-steps");
        const switchButtons = document.querySelector(".switch-buttons-section");

        if (window.getComputedStyle(descriptionText).getPropertyValue("display") === "none") {
            switchButtons.style.opacity = "0";
            descriptionImage.style.display = "block";
            descriptionText.style.display = "block";
            subscribeCircuit.style.display = "block";
            DisplayHideArrow.style.transform = "rotate(90deg)";
            descriptionContainer.style.height = '60%';
            descriptionImage.style.transition = "1s ease-in-out";
            descriptionImage.style.transform = "translateY(0%)";
            CircuitImage.style.opacity = "0.1";
            CircuitImage.style.transition = "0.5s ease";
            CircuitSteps.style.opacity = "0";
            MainContainer.style.height = '100vh';
            MainContainer.style.width = '100%';


            
        } else {
            switchButtons.style.opacity = "1";
            CircuitImage.style.opacity = "1";
            CircuitImage.style.transition = "0.5s ease";
            descriptionImage.style.transition = "0s";
            descriptionContainer.style.transition = "1s ease";
            descriptionImage.style.transform = "translateY(100%)";
            descriptionText.style.display = "none";
            subscribeCircuit.style.display = "none";
            DisplayHideArrow.style.transform = "rotate(-90deg)";
            descriptionContainer.style.height = '10%';
            MainContainer.style.height = '0vh';
            MainContainer.style.width = '0%';
        }
    }

    return (
        <>
            <div className="gp-circuit-steps"><GpShopsSlider slides={SliderShops}/></div>
            <div className="gp-circuit-map" style={{ backgroundImage: `url(${MyImage})` }}></div>
         
            {data.filter(card => card.route === route).map((card, index) => (
                <main key={index} className='gp-description-main' >
                    <SwitchButton />
                   
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