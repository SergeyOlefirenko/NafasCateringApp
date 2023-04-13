import React from "react";
import Filter from "./Filter";
import Order from "../order/Order";
import "./Packages.css";
import items from "../../data/dishes.json"
import SidebarItem from '../menu/SidebarItem';

export default function Menu() {
  return (
    <div className="menu_body">
      <div id="packages" className='packages'>
       { items.map((item) => <SidebarItem item={item} />) }
       </div>
      {/* category filter along Dips, Salate, Teigwaren, Extra, Dessert */}
      {/* package filter along Aladin, 1001 Nacht, Sahara */}

      <p>Paket Aladin (für 10 Personen)</p>
      <Filter package="Aladin" category="" className="frame" />
      <Order />

      <p>Paket 1001 Nacht (für 10 Personen)</p>
      <Filter package="1001 Nacht" category="" className="frame" />
      <Order />

      <p>Paket Sahara (für 10 Personen)</p>
      <Filter package="Sahara" category="" className="frame" />
      <Order />
      
      <p>Extra Platten (für 10 Personen mit Preisaufschlag)</p>
      <Filter package="Optional" category="Extraplatte" />
      <Order />

      <p>Dessert (für 10 Personen mit Preisaufschlag)</p>
      <Filter package="Optional" category="Dessert" />
      <Order />

      <span>
        <p>Bitte beachten:</p>
      </span>
      <p>
        <span>Platzhalter-Menu 2</span>
        Bitte weisen Sie uns auf mögliche Allergien hin. Pakete können wahlweise
        kombiniert und erweitert werden. Platten und Desserts können nicht ohne
        Pakete bestellt werden. Lieferungen innerhalb von München möglich in
        Höhe von 50 €. Kostenlose Abholung möglich in Kirchheim bei München.
      </p>
    </div>
  );
}


// import React from 'react';
// import './Packages.css';
// import items from "../../data/dishes.json"
// import SidebarItem from '../menu/SidebarItem';
// import { useState, useContext } from 'react';
// import { AppContext } from "../../App";


// function DishHandler() {
// const {data} = useContext(AppContext)
// const [showData, setShowData] = useState(false)
//   return (
//     <div>
//     <div id="packages" className='packages'>
//       { items.map((item) => <SidebarItem item={item} />) }
//       </div>
//     <div className='dishes'>
//     <div className="card_section">
//       {data &&
//         data.map((dish) => {
//           return (
//             <div
//             key={dish.id}
//             className="container"
//             onClick={() => {setShowData(!showData)}}
//             >
//               <img src={dish.URL} className="image" alt="dish" />
              
//               {showData === true && dish.URL}
            
//               <div className="overlay">
//                 {dish.name} ( {dish.category} )<br /> for {dish.price} <br />
//                 Zutaten: {dish.ingredients}
//               </div>
//             </div>
//           );
//         })}
//     </div>
//     </div>
//     </div>
       
//   );
// }

// export default DishHandler;

