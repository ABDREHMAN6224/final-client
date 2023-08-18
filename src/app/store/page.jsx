// "use client"
// import React, { useRef} from "react";
// import {FaChevronRight} from "react-icons/fa"
// import styles from "./store.module.css";
// import SingleProduct from "@/components/SingleProduct";

// import { MapContainer, TileLayer ,Marker,Popup} from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

// const Store = () => {
//   const data = [
//     {
//       id: 1,
//       image: "/s3.webp",
//       title: "Maison Goyard PARIS 233",
//       desc: "233 Rue Saint-Honoré, 75001 Paris",
//       number: "+1 2128130005",
//       time: "10:00 — 19:00",
//       code: [48.8665, 2.32891],
//     },
//     {
//       id: 2,
//       image: "/s2.webp",
//       number: "+33 157950666",
//       title: "Maison Goyard PARIS 66",
//       time: "10:00 — 19:00",
//       desc: "66, Rue François 1er, 75008 Paris",
     
//       code: [48.867555231276015, 2.328820801885616],
//     },
//     {
//       id: 3,
//       image: "/s3.webp",
//       title: "Maison Goyard Biarritz",
//       desc: "4 Avenue de l'Impératrice, 64200  Biarritz",
//       number: "+1 3102375745",
//       time: "10:00 — 19:00",
//       code: [43.485540204126494, -1.55582400448962],
//     },
//     {
//       id: 4,
//       image: "/s4.webp",
//       title: "Maison Goyard Milan",
//       desc: "Via Montenapoleone,18 angolo Via Gesù, 20121 Milan",
//       number: "+1 2128130005",
//       time: "10:00 — 19:00",
//       code: [45.46939884421385, 9.194595695652435],
//     },
//     {
//       id: 5,
//       image: "/s5.webp",
//       title: "Maison Goyard Monaco",
//       desc: "17-19 Avenue de Monte-Carlo, 98000 Monaco",
//       number: "+33 157950666",
//       time: "10:00 — 19:00",
//       code: [43.738406762053785, 7.4275544532011555],
//     },

//     {
//       id: 6,
//       image: "/s6.webp",
//       title: "MAISON GOYARD LONDON",
//       desc: "116 Mount Street, Mayfair, W1K 3NH London",
//       number: "",
//       time: "10:00 — 19:00",
//       code: [51.510138229017585, -0.14887744621003865],
//     },
//     {
//       id: 7,
//       image: "/s7.webp",
//       title: "MAISON GOYARD PARIS PRINTEMPS HAUSSMAN",
//       desc: "64, boulevard Haussmann, 75009 Paris",
//       number: "+33 142825108",
//       time: "10:00 — 19:00",
//       code: [48.87464, 2.32826],
//     },
//     {
//       id: 8,
//       image: "/s8.webp",
//       title: "MAISON GOYARD NEW YORK",
//       desc: "20 East 63rd Street, 10065 New York",
//       number: "+1 2128130005",
//       time: "10:00 — 19:00",
  
//       code: [40.76685, -73.9704],
//     },
//     {
//       id: 9,
//       image: "/s9.webp",
//       title: "MAISON GOYARD BEVERLY HILLS",
//       desc: "405 North Rodeo Drive, 90210 Beverly Hills",
//       number: "+1 3102375745",
//       time: "10:00 — 19:00",
//       code: [34.06943048202772, -118.40320508974011],
//     },
//     {
//       id: 10,
//       image: "/s10.webp",
//       title: "MAISON GOYARD MIAMI",
//       desc: "9700 Collins Avenue, Bal Harbour, 33154 Miami",
//       number: "+1 3058949235",
//       time: "10:00 — 19:00",
//       code: [35.939166515504624, -118.33661544779294],
//     },
//   ];
//   const mapRef=useRef(null)
 

//   const handleClick=(d)=>{
//       const {current={}}=mapRef
//       if(current!={}){
//       mapRef.current.setView(d);
//     }}
//   return (
//     <div className={styles.page}>
//       <div className={styles.container}>
//         <div className={styles.map}>
//           <MapContainer zoom={25} center={data[0].code} ref={mapRef}>
//             <TileLayer
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             {data.map((d) => {
//               return (
//                 <Marker key={d.id}
//                   position={d.code}
//                   icon={L.divIcon({
//                     iconSize: [40, 40],
//                     iconAnchor: [38 / 2, 38 + 9],
//                     className: "marker",
//                     html: "🚩",
//                   })}
//                 >
//                   <Popup>{d.title}</Popup>
//                 </Marker>
//               );
//             })}
//           </MapContainer>
//         </div>
//         <div className={styles.data}>
//           <div className={styles.info}>
//             <p>
//               Our Counters <FaChevronRight /> Find A Boutique
//             </p>
//             <h2>
//               FIND <br /> A <br />
//               BOUTIQUE
//             </h2>
//             <p>
//               Find a boutique by searching for a town or using your current
//               location.
//             </p>
//             <form action="">
//               <input type="text" placeholder="Find an Address" />
//               <p>use my current location</p>
//             </form>
//           </div>
//           <div className={styles.products}>
//             {data.map((d) => {
//               return (
//                 <SingleProduct
//                   key={d.id}
//                   title={d.title}
//                   image={d.image}
//                   number={d.number}
//                   desc={d.desc}
//                   time={d.time}
//                   code={d.code}
//                   handleClick={handleClick}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Store;

import React from 'react'

const Store = () => {
  return (
    <div>Store</div>
  )
}

export default Store