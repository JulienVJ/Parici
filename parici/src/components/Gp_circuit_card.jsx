import "../styles/Gp_circuit_card.css";

export const GpCircuitsCard = () => {

    // On utilisera de l'info acquis depuis le contexte tandis que certaines sont spécifiques ....

    // Temporary information base que l'on "chargera" des sélections effectués via les filtres: 

    const selectedGpCircuits = [
        {
            id_circuit:1,
            title:"tour des patissiers",
            place: "Notre Dame",
            date: new Date(),
            // Il faudra rendre cette propriété dynamique selon les inscriptions
            subscribers:5,
            subscribersMax:10,
            map: "a map",
            num:1
        
        },
        {
            id_circuit:2,
            title: "ballade des artisans",
            place: "Devant l'école HETIC",
            date: new Date(),
            // Il faudra rendre cette propriété dynamique selon les inscriptions
            subscribers:5,
            subscribersMax:10,
        }
    ];

    const SelectionLength = selectedGpCircuits.length;

    return(
        <div className="gp-card-container">
            {selectedGpCircuits.map((selectedCard) => (
                    <div key={selectedCard.id}>
                        <div className="gp-circuit-card-header">
                            <div>{selectedCard.map}</div>
                            <div  className="title">
                                <h1>{selectedCard.title}</h1>
                            </div>
                        </div>
                        <ul className="gp-circuit-card-infos">
                            <li>{selectedCard.place}</li>
                            <li>{selectedCard.date}</li>
                            <li>{selectedCard.subscribers}/{selectedCard.subscribersMax}</li>
                        </ul>
                        <div className="gp-card-order">
                            <h1>{selectedCard.num}/{SelectionLength}</h1>
                        </div>
                    </div>))};           
        </div>   
    )
}

export default GpCircuitsCard;