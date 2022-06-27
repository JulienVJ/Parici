import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CreateCircuits.css";
import Card from "./Card";

const CreateCircuits = () => {
  const [shopData, setShopData] = useState([]);
  const [saveChoice, setSaveChoice] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const arrondissements = [
    "75001",
    "75002",
    "75003",
    "75004",
    "75005",
    "75006",
    "75007",
    "75008",
    "75009",
    "75010",
    "75011",
    "75012",
    "75013",
    "75014",
    "75015",
    "75016",
    "75017",
    "75018",
    "75019",
    "75020",
  ];
  const radios = [
    "Restaurant ou traiteur",
    "Boucherie - charcuterie - rôtisserie",
    "Primeur",
    "Alimentation générale et produits de première nécessité",
    "Librairie",
    "Caviste - Brasserie",
    "Boulangerie - pâtisserie",
    "Épicerie fine",
    "Artisanat d'art",
    "Fromagerie",
    "Fleuriste",
    "Poissonnerie",
    "Jouets - Jeux",
    "Chocolaterie - Pâtisserie",
    "Cosmétique",
    "Pharmacies et parapharmacies",
    "Disquaire",
    "Équipements informatiques",
    "Bricolage",
    "Presse et papeterie",
    "Articles médicaux et orthopédiques",
    "Blanchisserie-teinturerie",
    "Matériel de télécommunication",
    "Autre",
  ];

  // appel de l'API grace à axios (à installer avec npm)
  useEffect(() => {
    axios
      .get(
        "https://opendata.paris.fr/api/records/1.0/search/?dataset=coronavirus-commercants-parisiens-livraison-a-domicile&q=&rows=1000&facet=code_postal&facet=type_de_commerce&facet=fabrique_a_paris&facet=services"
      )
      .then((res) => setShopData(res.data.records));
  }, []);
  // fonction pour mettre à jour les shop selon la catégorie choisie
  const handleOnChange = (e) => {
    e.preventDefault();
    setSelectedRadio(e.target.value);
  };

  return (
    <div className="shops">
      <ul className="radio-container">
        <div>
          <form className="form" onChange={handleOnChange}>
            <label htmlFor="categorie">Choisir un filtre</label>
            <select name="categorie" id="categorie">
              <option value="">--Please choose an option--</option>
              {/* mapping du tableau des catégories existantes */}
              {radios.map((categorie) => (
                <option id={categorie} name="categorieRadio" value={categorie}>
                  {categorie}
                </option>
              ))}
            </select>

            <label htmlFor="categorie">Choisir un filtre</label>
            <select name="categorie" id="categorie">
              <option value="">--Please choose an option--</option>
              {/* mapping du tableau des arrondissements existants */}
              {arrondissements.map((arrondissement) => (
                <option
                  id={arrondissement}
                  name="categorieRadio"
                  value={arrondissement}
                >
                  {arrondissement}
                </option>
              ))}
            </select>
          </form>
        </div>
      </ul>
      <ul className="shop-list">
        {/* filtre necessaire pour afficher les bons shops selon catégorie */}
        {shopData
          .filter((categorie) =>
            categorie.fields.type_de_commerce.includes(selectedRadio)
          )
          .map((shop) => (
            <Card
              key={shop.recordid}
              shop={shop}
              setSaveChoice={setSaveChoice}
            />
          ))}
          
        {/* filtre necessaire pour afficher les bons shops selon arrondissement */}
        {shopData
          .filter((arrondissement) =>
            arrondissement.fields.code_postal.includes(selectedRadio)
          )
          .map((shop) => (
            <Card
              key={shop.recordid}
              shop={shop}
              setSaveChoice={setSaveChoice}
            />
          ))}
      </ul>
    </div>
  );
};

export default CreateCircuits;
