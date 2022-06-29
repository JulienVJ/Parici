import React from "react";
import  './styles/description.css'

export const App =() => {
  return(
  <>
    <div id="head">
      <img id="pain" src="./img/pain.jpg" alt="bon pain"/>
    </div>
    <div id="gradient"></div>
    <div>
        <p id="title">La balade des pâtissiers </p>
        <p id="subtitle">Proposé par Roland Drouard</p>
    </div>
    <hr/>
    <div>
        <p id="titleprogram">Au programme</p>
        <p id="program">En partant du quartier latin, direction la Maison d’Isabelle pour un apéro gourmand avec ses fameux choux farcis aux marrons.
            Ensuite, cap sur le Fournil de Mouffetard pour faire le plein de plaisirs fruités et de rencontre avec Robert le bon gus, il nous fera notamment gouter sa choucroute à la milanaise.Pour finir, apotéose au kébab Istanbul pour une touche de délicatesse.</p>
    </div>
    <hr/>
    <div>
        <img class ="icones"src="./img/icons8-marqueur-24.png" alt="La Maison d’Isabelle"/>
        <span class="adresses"> <strong>1</strong> . 47ter Bd Saint-Germain, 75005 Paris</span>
        <br/>
        <br/>
        <img class ="icones" src="./img/icons8-marqueur-24.png" alt="Ritz" />
        <span class="adresses"> <strong>2</strong> . 54, Rue Corvisart, 75013 Paris France</span>
        <br/>
        <br/>
        <img class ="icones" src="./img/icons8-marqueur-24.png" alt="Il Etait Un Square"/>
        <span class="adresses"> <strong>3</strong> . 15 Pl. Vendôme, 75001 Paris</span>
    </div>
    <div id="bottom">
        <div>
            <button href="#0" id="button">Réservez une place</button>
        </div>
    </div>
    </>
  )
}
