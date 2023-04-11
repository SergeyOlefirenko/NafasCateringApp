import './App.scss';
import Home from './components/home/Home';
import Packages from './components/packages/Packages';
import Contacts from './components/contacts/Contacts';
import Order from './components/order/Order';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from "react";
import elements from "./data/sidebar.json"
import dishes from "./data/menu.json"
export const AppContext = createContext();

function App() {
  const [navi, setNavi] = useState(elements)
  const [data, setData] = useState(dishes)
  const[menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  
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
  return (
    <AppContext.Provider value={{
    navi,
    setNavi,
    data,
    setData
     }}>
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen}/>
      <div className="sections">
      <Routes>
  <Route path='/home' element={<Home />}/>
  <Route path='/packages' element={<Packages />}/>
  <Route path='/contacts' element={<Contacts />}/>
  <Route path='/order' element={<Order />}/>
 </Routes>
        {/* <Home />
        <Packages />
        <Contacts/>
        <Order /> */}
      </div>
    </div>
    </AppContext.Provider>  
  );
}

export default App;
