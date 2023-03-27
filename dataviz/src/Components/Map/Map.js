

import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, Polygon, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./Map.css";
import axios from "axios";

const redOptions = { color: 'red' }

function Map() {
  const [position, setPosition] = useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(
        `https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010`
      );
      const positionR = [
        resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][1],
        resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][0],
      ];
      const records = resp.data.records
      records.forEach(record => {
        console.log(record)
        const polygon = resp.data.records[0].record.fields.geom.geometry.coordinates
    
      const bigTableau = []
      const polygonReversed = []
      for(let i=0 ; i < polygon.length ; i++){
        for(let j=0 ; j < polygon[i].length ; j++){
            polygonReversed.push(polygon[i][j].reverse())
            }
      }
      bigTableau.push(polygonReversed)
      setPosition(bigTableau);
      });
      
    }
    fetchData();
  }, []);
  return (
    <div>
    {position &&(
    <MapContainer center={[48.87, 2.35]} zoom={12.2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Polygon pathOptions={redOptions} positions={position} />
    </MapContainer>
  )};
  </div>
  )
}

export default Map;