import React from 'react';
import { useParams, Link } from 'react-router-dom';

import '../styles/gp_description.css'

export const GpCircuitDescription = ({data}) => {

    const { route } = useParams();

    return (
        <>
            {data.filter(card => card.route === route).map((card, index) => (   
                            <main key={index} className='gp-description-main'>
                                <div  className="gp-description-card">
                                <div className='gp-description-image' style={{ backgroundImage: `url(${card.map})`}}></div> 
                                    <div className='gp-description-text'>
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
                              
                            </main>
            ))}
      
        </>
    )

}

export default GpCircuitDescription;