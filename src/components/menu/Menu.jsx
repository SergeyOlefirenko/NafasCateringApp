import React from 'react';
import './Menu.scss';
import SidebarItem from "./SidebarItem"
import items from "../../data/sidebar.json"

export default function Menu({ menuOpen }) {
  return (
    <div className={menuOpen ? "menu active" : "menu"}>
       <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
      
      {/* <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#contacts">Contacts</a></li>
        <li><a href="#order">Order</a></li>
      </ul> */}
    </div>
   
  )
}
