import React from 'react';
import '../styles/gp-subscribe.css';
import { useParams, Link } from 'react-router-dom';
import { FaWindows } from 'react-icons/fa';

// Composant qui non-terminé pour s'inscrire à un groupe
export const GpSubscribe = ({data}) => {

    const { route } = useParams();

    /**
     * Une fois inscris, l'utilisateur reçois un message de confirmation et il peut:
     * -soit cliquer sur retour aux groupes
     * - soit être redirigé vers les groupes 
     */
    
    const subscribeEvent = (e) => {
        e.preventDefault();
        document.querySelector('.subscription').classList.add('done');
        const message =  document.querySelector('.message');

        if(!message.classList.contains("active")){

            // Le message qui informe de la redirection et de l'inscription (et le lien de retour manuel)
            message.classList.add("active");

            // Au bout de 1.5 secondes l'utilisateur est redirigé
            setTimeout(() => {
                console.log("Delayed for 1 second.");
                // Il faut bien vérifier la route ici pour rediriger là où on veux (voir l'url qui s'affiche dans le navigateur)
                window.location.href = "../";
            }, "1500")
        
            
        } else { 
            // Supprimmer le message
            message.classList.remove("active");
        }
      
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
                    <div className='message'>
                        <p>Vous êtes bien inscrit à {card.title} et vous allez être redirigé vers les circuits de groupe</p>
                        {/* Bien vérifier le lien ici pour qu'il conduise toujours à l'accueil */}
                        <Link to='../' >Retour Accueil</Link>
                    </div>
                </div>
                ))
        }  
        </>
    )
}
