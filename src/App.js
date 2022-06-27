import { useState, useEffect } from 'react';
import './css/intro.css';

function App() {

  const [pictures, setPictures] = useState('intro');
  var [count, setCount] = useState(1);
  const [title, setTitle] = useState([
    "Selectionnez votre parcours",
    "Rendez-vous le jour J",
    "Profitez du moment !"
  ]);
  const [bio, setBio] = useState([
    "Trouver le parcours qui vous plaira parmi notre sélection de commerces ou découvrez Paris sous un tout nouvel angle",
    "Préparez vos chaussures, votre carnet de bonnes adresses et votre groupe d’amis, votre journée sera bien remplie !",
  ]);

  useEffect(() => {
    document.getElementById(count).style.backgroundColor = "blue";
    document.getElementById(count).style.width = "50px";
  });

  const handleClick = () => {
      document.getElementById(count).style.backgroundColor = "grey";
      document.getElementById(count).style.width = "10px";
      setCount(count+1);
      document.getElementById(count+1).style.backgroundColor = "blue";
      document.getElementById(count+1).style.width = "50px";
  }

  if (count == 3) {
    document.getElementById("footerBlock").style.display = "none";
    document.getElementById("footerEnd").style.display = "flex";
  }

  return (
    <div>
      <img
        className='introPicture'
        src={process.env.PUBLIC_URL + "pics/" + pictures + count +".jpg"}/>
      <div className='textBlock'>
        <div id="carrousel">
          <div className="cercles" id="1"></div>
          <div className="cercles" id="2"></div>
          <div className="cercles" id="3"></div>
        </div>
        <h2 id="titlePart">{title[count-1]}</h2>  
        <p id="bioPart">{bio[count-1]}</p>

        <div id="footerBlock">
          <a href='#' id="skip">Passer</a>
          <button onClick={handleClick} id="buttonNext">Next</button>
        </div>

        <div id="footerEnd">
          <button id="Start">Commencer</button>
        </div>
      </div>      
    </div>
  );
}

export default App;
