import React from 'react';
import './Packages.scss';
import items from "../../data/dishes.json"
import SidebarItem from '../menu/SidebarItem';
import { useState, useContext } from 'react';
import { AppContext } from "../../App";


function DishHandler() {
const {data} = useContext(AppContext)
const [showData, setShowData] = useState(false)
  return (
    <div>
    <div id="packages" className='packages'>
      { items.map((item) => <SidebarItem item={item} />) }
      </div>
    <div className='dishes'>
    <div className="card_section">
      {data &&
        data.map((dish) => {
          return (
            <div
            key={dish.id}
            className="container"
            onClick={() => {setShowData(!showData)}}
            >
              <img src={dish.URL} className="image" alt="dish" />
              
              {showData === true && dish.URL}
            
              <div className="overlay">
                {dish.name} ( {dish.category} )<br /> for {dish.price} <br />
                Zutaten: {dish.ingredients}
              </div>
            </div>
          );
        })}
    </div>
    </div>
    </div>
       
  );
}

export default DishHandler;

// import Dishes from "../../data/menu.json"

// import { useState } from 'react';

// function DishHandler() {
// const [showData, setShowData] = useState(false)



//   return (
//     <div className='dishes'>
//         <div className="card_section">
//       {Dishes &&
//         Dishes.map((dish) => {
//           return (
//             <div
//               key={dish.id}
//               className="container"
//               onClick={() => {setShowData(!showData)}}
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
//   );
// }

// export default DishHandler;