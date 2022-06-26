import React from 'react';
import '../styles/gp-subscribe.css';
import { useParams } from 'react-router-dom';

export const GpSubscribe = ({data}) => {

    const { route } = useParams();

    const subscribeEvent = (e) => {
        e.preventDefault();
        document.querySelector('.subscription').classList.add('done');
        const message =  document.querySelector('.message');
        if (message.textContent === '') {
            message.textContent = 'Nous vous avons ajouté à la liste des participants, cliquez sur unsubscribe pour vous retirer.';
        } else {
            message.textContent = '';
        }

        console.log(route)
        data.filter(card => card.route === route).map((card, index) => console.log(card.Subscribers+1) )
       
    }

    return (
        <>
        {
            data.filter(card => card.route === route).map((card, index) => (
                <div key={index} className="container">
                    <div className="content">
                        <form className="subscription">
                            <input className="add-pseudo" type="text" placeholder="écrivez ici votre pseudo" />
                            <button className="gp-enrolled" type="button" onMouseDown={subscribeEvent} >
                                <span className="before-submit">Subscribe</span>
                                <span className="after-submit">Vous avez souscris à {card.title}</span>
                            </button>
                        </form>
                    </div>
                    <p className='message'></p>
                </div>
                ))
        }
        
        </>

    )

}
