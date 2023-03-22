import React from 'react';
// import logo from '../logo.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    function home() {
        navigate('/home')
      }

    return (
        <div className="Home">
          <div className='main-pic'></div>
          <div className='main-content'></div>
          <button className='btn'>Catering request</button>
      {/* <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <br />
        <a onClick={home} className='invite'>
            Home
          </a>
        <a
          className="Home-link"
          href="https://www.instagram.com/nafas.muenchen/"
          target="_blank"
        >
          Join us in Instagram
        </a>
      </header> */}

    </div>
    );
}

export default Home;
