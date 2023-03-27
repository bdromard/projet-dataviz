// import React, { useEffect, useState } from "react";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
// import "./Map.css";
// import axios from "axios";

// function Map() {
//   const [positions, setPositions] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const resp = await axios.get(
//         `https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010`
//       );
//       console.log(resp);
//       const positionRs = resp.data.records.map((record) => [
//         record.fields.geom.geometry.coordinates[0][0][1],
//         record.fields.geom.geometry.coordinates[0][0][0],
//       ]);
      
//       setPositions(positionRs);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <MapContainer center={[48.87, 2.35]} zoom={12.2}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />

//         {positions.map((position, index) => (
//           <Marker key={index} position={position}>
//             <Popup>{`Position ${index + 1}`}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

// export default Map;

////////////////////////////////////////////////////////////////


import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./Map.css";
import axios from "axios";

function Map() {
  const [position, setPosition] = useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(
        `https://opendata.paris.fr/api/v2/catalog/datasets/espaces_verts/records?refine=adresse_codepostal:75010`
      );
      const positionR = [
        resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][1],
        resp.data.records[0].record.fields.geom.geometry.coordinates[0][0][0],
      ];
      setPosition(positionR);
    }
    fetchData();
    // &refine=nsq_espace_vert:10297
  }, []);
  return (
    <div>
    {position &&(
    <MapContainer center={[48.87, 2.35]} zoom={12.2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={position}></Marker>
    </MapContainer>
  )};
  </div>
  )
}

export default Map;