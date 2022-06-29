import React from "react";

const Card = ({ shop, setSaveChoice }) => {
  // fonction afin de cibler le shop choisit, afin de le mettre par la suite dans un tableau
  const addArray = (e) => {
    setSaveChoice((current) => [...current, e.target.value]);
  };
  return (
    <li className="card">
      <div className="infos">
       {/*  <img
          src="./img/img.jpg"
          alt={"Magasin " + shop.fields.nom_du_commerce}
        /> */}
        <h2>{shop.fields.nom_du_commerce}</h2>
        <h4>{shop.fields.type_de_commerce}</h4>
        <p>
          {shop.fields.adresse}
          <br />
          {shop.fields.code_postal}
          <br />
          {shop.fields.telephone
            ? shop.fields.telephone
            : "Numéro de téléphone indisponible"}
        </p>
        <input
          onClick={addArray}
          type="checkbox"
          value={shop.fields.nom_du_commerce}
        />
      </div>
    </li>
  );
};

export default Card;
