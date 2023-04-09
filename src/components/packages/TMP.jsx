import React from 'react';
import './Packages.scss';
import Dishes from "../../data/menu.json"
import items from "../../data/dishes.json"
import SidebarItem from '../menu/SidebarItem';


import { useState } from 'react';

function DishHandler() {
const [showData, setShowData] = useState(false)
  return (
    <div>
    <div id="packages" className='packages'>
      { items.map((item) => <SidebarItem item={item} />) }
      </div>
    <div className='dishes'>
    <div className="card_section">
      {Dishes &&
        Dishes.map((dish) => {
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