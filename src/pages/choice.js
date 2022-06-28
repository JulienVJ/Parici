// import { useState } from 'react';
import '../style/choice.css';
import {useState} from 'react';


function Button(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };
  
  return (
      <button id="button"
        style={{
          backgroundColor: isActive ? '#003566' : '#AAD6FF',
          color: isActive ? 'white' : 'black',
        }}
        onClick={handleClick}
      >{props.title}
      </button>
  );
}


function Choice() {
  return (
    <div className="App">
      <h1>Vos préférences</h1>
      <br/>

      <h2>Alimentation</h2>
      <Button title="salé"/>
      <Button title="sucré"/>
      <Button title="gastronomique"/>
      <Button title="végétarien"/>
      <Button title="vegan"/>
      <Button title="fruits"/>
      <Button title="légumes"/>
      <Button title="viande"/>
      <Button title="vin"/>
      <Button title="boisson"/>
      <br/><br/>

      <h2>Lifestyle</h2>
      <Button title="0 déchets"/>
      <Button title="naturel"/>
      <Button title="healthy"/>
      <Button title="écologique"/>
      <Button title=""/>
      <br/><br/>

      <h2>Mode</h2>
      <Button title="femme"/>
      <Button title="homme"/>
      <Button title="enfant"/>
      <Button title="chaussures"/>
      <Button title="accesoires"/>

      {/* <button id="svg"><img id='arrow-svg' src='arrow.svg' alt='svg'></img> </button> */}
    </div>
  );
}

export default Choice;
