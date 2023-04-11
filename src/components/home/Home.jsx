import React, { useState } from 'react';
import "./Home.scss";
import logo from '../../images/logo.png';
import main from '../../images/main.PNG'
import nafas from '../../images/nafas.mp4'
import Slider from './Slider';
// import Dishes from "../../data/menu.json"
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()
  function packages() {
    navigate('/packages')
  }
 
  // Видео

  const playMovie = (e) => {
    e.target.play();
  };
  const stopMovie = (e) => {
    e.target.pause();
  };
  const videoProperties = {
    with: '100px'
  }
  return (
    <div id='home' className='home'>
      <div className='main'>

        <div className='main-pic'>
          <img src={main} className="main-img" />
          <div className='main-content'>
            <h1>Authentic oriental cuisinen faucibus.</h1>
            <p>Aliquam faucibus ex in est tincidunt feugiat.
              Mauris maximus urna est, sed bibendum
              tellus iaculis laoreet. Morbi element</p>
          </div>

        </div>
        <div className='home-container'>


        <button className='btn' onClick={packages}><i className="bi-arrow-right-circle-fill"></i> Catering</button>
        <div className='wedding' id="weddings">
          <div className="video">
            <video style={videoProperties}
              controls
              muted="true"
              onMouseOver={playMovie}
              onMouseOut={stopMovie}
              >
              <source src={nafas} type="video/mp4" />
            </video>
          </div>
          <h1>Weddings</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea,
            voluptate enim sapiente commodi inventore numquam, sit facere iure modi,
            eum aliquam veritatis pariatur dolores eaque amet hic! Nisi et alias
            voluptatum facilis sunt quasi consequatur amet, deserunt, aperiam totam
            numquam dolor. Quos dicta magni illum maxime. Sint, dicta non!
          </p>
        </div>
        <div className='slider'>
          <Slider/>
        </div>
        <div className='footer'>
          <div className='footer-img'>
            <img src={logo} className="footer-logo" alt="logo" />
          </div>
          <div className='footer-text'>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <a
              className="Home-link"
              href="https://www.instagram.com/nafas.muenchen/"
              target="_blank"
              >
              Join us in Instagram
            </a>
          </div>
          <div className='footer-icons'>
            <div className='bi-instagram'></div>
            <div className='bi-facebook'></div>
          </div>
          <div className='Rights-text'>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
      </div>
    </div>
              </div>
  )
}
