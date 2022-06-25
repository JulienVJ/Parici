import React from 'react';
import { SliderData } from './SliderData';
import GpCircuitsCard from "./Gp_circuit_card";


export const GpCircuitsCarrousel = () => {
    // Là c'est juste pour voir ce que donne l'UI de la carte donc pour l'instant c'est un appel ici du composant de carte pour en afficher une seule et c'est tout.
    // besoin d'un props dans le composant-enfant car on passera par le carrousel, pour l'instant c'est impropre
    // On mapera à partir d'ici dés que le composant carrousel sera fait (pour l'instant le map se trouve dans le composant de carte lui-même)
    // Ces infos pour garnir les cartes des circuits concernant tout le site, on utilisera sûrement plutôt la context API que le passage via des props Parent/enfant
    
    return(
        <>
        <GpCircuitsCard  slides={SliderData} />

        </>
    )
}

export default  GpCircuitsCarrousel;