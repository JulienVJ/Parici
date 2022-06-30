import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CreateCircuits.css";
import Card from "../components/Card";

export const CreateCircuits = () => {

  const [shopData, setShopData] = useState([]);
  const [saveChoice, setSaveChoice] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [nameCircuit, setNameCircuit] = useState("");
  const [descriptionCircuit, setDescriptionCircuit] = useState("");
  const [randomImage, setRandomImage] = React.useState('');


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

  // pour insérer des image aléatoirement pour nos circuits
  const renderImage = () => {
    const Images = [
      { image: 'https://images.unsplash.com/photo-1597758464605-aa125b827c33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2VyYW1pY3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60',
        alt: "ceremique fav",
    },
      { image: 'https://images.unsplash.com/photo-1611512429151-780176f93478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60',
        alt: "circuit oenologique",
    },
      { image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBmb29kfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
        alt: "cuisine jap"
    },
      { image: 'https://images.unsplash.com/photo-1536266305399-b367feb671f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', alt: "pot artisan" },
      { image: 'https://images.unsplash.com/photo-1547240089-566513e12c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        alt: "coffee"
    },
    { image: 'https://images.unsplash.com/photo-1526936393420-a8933ef19b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80', alt: "fleuriste"},
    { image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', alt:"restaurant"},
    { image: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', alt:"restaurant"},
    { image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', alt:"restaurant"},
    { image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', alt:"plat"},
  ];
    const randomImageIndex = Math.floor(Math.random() * Math.floor(4));
    return Images[randomImageIndex].image;
  };
  useEffect(() => {
    setRandomImage(renderImage);
  },[]);

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

  const addCircuit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/circuit/addNewCircuit", {
      name_circuit: nameCircuit,
      description_circuit: descriptionCircuit,
      arrondissement: selectedRadio,
      image_circuit: randomImage,
      magasin: saveChoice.toString(),
      circuit_magasin: saveChoice.toString(),
    })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert(response.data);
        }


      });


  };

  return (
    <div className="containeCircuit">
      <div className="shops">
        <ul className="radio-container ul">

          <div>
            <form className="form" onChange={handleOnChange}>
              <div className="BtnCircuit">
              <button className="backBtn" type="submit"><span class="material-icons">arrow_back</span></button>
              <button className="createBtn" type="submit" onClick={addCircuit}>Créer</button>
              </div>
              <div className="Input">
                <input type="text" id="CreateInput" placeholder="nom du circuit" onChange={(e) => { setNameCircuit(e.target.value); }} />

                <input type="text" id="CreateInput" placeholder="description du circuit" onChange={(e) => { setDescriptionCircuit(e.target.value); }} />

              

              <select name="categorie" id="categorie">
                <option value="" >--Catégorie du commerce --</option>

                {radios.map((categorie, index) => (
                  <option id={categorie} key={index} name="categorieRadio" value={categorie} >
                    {categorie}
                  </option>
                ))}
              </select>


              <select name="categorie" id="categorie">
                <option value="">--Arrondissement--</option>

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
              </div>
            </form>
          </div>
        </ul>
        <ul className="shop-list ul">
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
    </div>

  );
};

export default CreateCircuits;