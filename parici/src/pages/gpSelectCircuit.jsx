
import {  GpCircuitsCarrousel } from "../components/Gp_circuit_carrousel";

export function GpCircuitsPage(){

    return(
        <div className='gp-selected-page-container'>
             {/* Ici se trouvera : gp back arrow - la flèche pour retour page précèdente*/}
             <GpCircuitsCarrousel />
             {/* Ici se trouvera : gp search container */}
            
        </div>

    )
}

export default GpCircuitsPage;