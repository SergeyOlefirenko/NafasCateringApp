import './App.css';
import logo from './logo.png';
// import React from 'react' Не обязательное условие
import { Dropdown, Menu } from 'semantic-ui-react'

import menu from './menu.png';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Sidebar from './components/Sidebar'
import { Routes, Route, useNavigate } from 'react-router-dom';
import json from './data.json'
import { createContext } from 'react';
import { useState, useEffect } from 'react';
// import background from "./images/background.png"; (бекграунд нужно подключать здесь только при необходимости)
import axios from "axios";
export const AppContext = createContext();
// Function to connect with json-server (start)
function App() {
  const [admin, setAdmin] = useState([])
  function fetching(){
   axios('https://jsonserver-bd7n.onrender.com/').then(i=> setAdmin(i.data))
  }
  useEffect(()=>{
   fetching()
  },[])
  // Function to connect with json-server (finish)
  const [data, setData] = useState(json)
  const [showText, setShowText] = useState(false)
  const [pagination, setPagination] = useState(0);
  const navigate = useNavigate()
  

  // Реализация тестового перехода
  function homepage() {
    navigate('/home')
    setShowText(!showText)
  }
  // Функции переходов к другим компонентам при их подключении
  function about() {
    navigate('/about')
  }
  function history() {
    navigate('/history')
  }
  function alladin() {
    navigate('/alladin')
  }
  function night() {
    navigate('/night')
  }
  function sahara() {
    navigate('/sahara')
  }
  function plato() {
    navigate('/plato')
  }
  function desert() {
    navigate('/desert')
  }
  function contacts() {
    navigate('/contacts')
  }
  function request() {
    navigate('/request')
  }
  function aboutUs() {
      }
  return (
    // Логика для реализации управления в будущем (пока не подключена)
    <AppContext.Provider value={{
      data,
      setData,
      pagination,
      setPagination,
      admin, 
      setAdmin
     }}>
    <div className='home'>
      <div className='header'>
      <div className="main">
        {/* Логика реализации выпaдающего меню с вызовом функции в которую переданы данные для отображения при изменении состояния */}
        <div><img src={menu} onClick={() => {setShowText(!showText)}}className='menu'/>
        <br />
        {showText === true && <Sidebar />}
        </div> 
        </div> 
      <Routes>
  <Route path='/home' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/events' element={<Events />}/>
 </Routes>
 </div>
 {/* Это - исключительно логотип nafas никакой логики в этой строке нет */}
 <div className=''><img src={logo} className='logo'/></div>
    </div>
     </AppContext.Provider>  
  );
}
export default App;
