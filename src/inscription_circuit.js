
export const Index = () => {
  return (
      <div id="fond">
        <button id="fleche"></button>
        <div id ="rect">
          <div id = "ElementInscr">
            <div id="espace"></div>
            <h3>Inscription<br/>Tour des patissiers</h3>
            <div id="text">
              <strong>Nom :</strong><input type="text" className="champs"  /><br/>
              <br/>
              <strong>Prenom :</strong><input type="text" className="champs" /><br/>
              <br/>
              <strong>Tel :</strong><input type="text" className="champs" /><br/>
              <br/>
              <strong>Email :</strong><input type="email" className="champs" /><br/>
              <br/>
              <strong>Votre message facultatif :</strong><br/>
              <textarea className="champs" placeholder="Un message pour l'organisateur ?"></textarea><br/>
              <button id="buton">Valider</button>
            </div>
            
          </div>
           
        </div>
      </div>
  );
}
