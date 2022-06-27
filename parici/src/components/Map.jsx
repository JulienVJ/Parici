import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  const [shopData, setShopData] = useState([]);

  // useEffect(
    
  //         function updatePathOptions() {
  //               if (props.pathOptions !== optionsRef.current) {
  //               var options = props.pathOptions ?? {};
  //               element.instance.setStyle(options);
  //               optionsRef.current = options;
  //               }
  //         })

  // appel de l'API grace à axios (à installer avec npm)
  useEffect(() => {
    axios.get(
        "https://opendata.paris.fr/api/records/1.0/search/?dataset=coronavirus-commercants-parisiens-livraison-a-domicile&q=&rows=100&facet=code_postal&facet=type_de_commerce&facet=fabrique_a_paris&facet=services"
      )
      .then((res) => setShopData(res.data.records));
  }, []);

  return (
    <div>
      {/* leaflet intégré grace à l'import (voir haut de page) donc appelé ici */}
      {/* carte en général */}
      <MapContainer
        center={[48.871255374114924, 2.353212968252459]}
        zoom={12}
        scrollWheelZoom={true}
      >
        {/* personnalisation de la carte (modèle) */}
        <TileLayer
          attribution='<a href=https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"">OpenStreetMap</a> contributors'
          url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        />
        {/* map des données de l'API dans Marker pour avoir tous les shop de renseignés  */}
        {shopData.map((shop) => (
          // emplacement des shop
          <Marker
            key={shop.recordid}
            position={[
              shop.fields.geo_point_2d[0],
              shop.fields.geo_point_2d[1],
            ]}
          >
            {/* informations supplémentaires qui s'ouvrent lorsque qu'on appuie sur un shop  */}
            <Popup>
              <h1>{shop.fields.nom_du_commerce}</h1>
              <h2>{shop.fields.type_de_commerce}</h2>
              <p>
                {shop.fields.adresse}
                <br />
                {shop.fields.code_postal}
                <br />
                {shop.fields.telephone}
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;