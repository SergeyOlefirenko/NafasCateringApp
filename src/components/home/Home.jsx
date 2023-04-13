import React from "react";

import "./Home.css";
import Order from ".././order/Order";
import Slider from "./Slider";
import logo from '../../images/logo.png';
import main from '../../images/main.PNG'
import nafas from '../../images/nafas.mp4'

// import images for background images
import picture1 from "../../images/picture1.png";
import picture2 from "../../images/picture2.png";
import picture3 from "../../images/picture3.png";

export default function Main() {
  const playMovie = (e) => {
    e.target.play();
  };
  const stopMovie = (e) => {
    e.target.pause();
  };

  return (
    <main>
      <section>
        {/* https://upmostly.com/tutorials/react-background-image */}
        <div
          className="main_image"
          style={{ backgroundImage: `url(${picture1})` }}
        ></div>
        <div className="main overlay">Bild 1</div>

        <p>
          <span>Platzhalter-Home 1</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit
          eum tenetur architecto odit possimus explicabo ea? Deleniti tempora
          impedit modi autem error corrupti ut eveniet inventore possimus nulla
          dicta architecto fuga pariatur obcaecati, iste doloremque totam
          laudantium beatae consequatur magnam! Beatae dolorum non facilis sequi
          numquam id architecto hic.
        </p>
        <Order />
      </section>

      <hr />
      
      <section>
        <div
          className="main_image"
          style={{ backgroundImage: `url(${picture2})` }}
        ></div>
        <div className="main overlay">Bild 2</div>
        <h1>Anlässe</h1>
        <p>
          <span>Platzhalter-Home 2</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit
          eum tenetur architecto odit possimus explicabo ea? Deleniti tempora
          impedit modi autem error corrupti ut eveniet inventore possimus nulla
          dicta architecto fuga pariatur obcaecati, iste doloremque totam
          laudantium beatae consequatur magnam! Beatae dolorum non facilis sequi
          numquam id architecto hic.
        </p>
        <div
          className="main_image"
          style={{ backgroundImage: `url(${picture3})` }}
        ></div>
        <div className="main overlay">Bild 3</div>

        <Order />
         
           <div className="video">
             <video 
              controls
              muted="true"
               onMouseOver={playMovie}
              onMouseOut={stopMovie}
               >
               <source src={nafas} type="video/mp4" />
             </video>
            {/* <div className="main overlay">Video 1</div> */}
         </div>
      </section>
      <br />
      <br />

      <hr />

      <section>
        <h1>Statistik (Platzhalter Home 3)</h1>
      </section>

      <hr />

      <section>      
        <Slider/>
        <div className="main overlay">Bild(er) 4</div>
      </section>
      <footer>
      <img src={logo} className="footer-logo" alt="logo" />
      <div className="address">
        <p>Rosenheimerstr. 139 in 81671 München</p>
        <p>email: info@nafas.de</p>
        <p>Tel: 123456789</p>
      </div>

      <div className="social_media">
      <div className='footer-icons'>
             <div><a className='bi-instagram'
               href="https://www.instagram.com/nafas.muenchen/"
               target="_blank"
              >
            </a></div>
             <div className='bi-facebook'></div>
           </div>
      </div>
    </footer>
    </main>
    
  );
}




// import React, { useState } from 'react';
// import "./Home.css";
// import logo from '../../images/logo.png';
// import main from '../../images/main.PNG'
// import nafas from '../../images/nafas.mp4'
// import Slider from './Slider';
// // import Dishes from "../../data/menu.json"
// import { useNavigate } from 'react-router-dom';

// export default function Home() {
//   const navigate = useNavigate()
//   function packages() {
//     navigate('/packages')
//   }
 
//   // Видео

//   const playMovie = (e) => {
//     e.target.play();
//   };
//   const stopMovie = (e) => {
//     e.target.pause();
//   };
//   const videoProperties = {
//     with: '100px'
//   }
//   return (
//     <div id='home' className='home'>
//       <div className='main'>

//         <div className='main-pic'>
//           <img src={main} className="main-img" />
//           <div className='main-content'>
//             <h1>Authentic oriental cuisinen faucibus.</h1>
//             <p>Aliquam faucibus ex in est tincidunt feugiat.
//               Mauris maximus urna est, sed bibendum
//               tellus iaculis laoreet. Morbi element</p>
//           </div>

//         </div>
//         <div className='home-container'>


//         <button className='btn' onClick={packages}><i className="bi-arrow-right-circle-fill"></i> Catering</button>
//         <div className='wedding' id="weddings">
//           <div className="video">
//             <video style={videoProperties}
//               controls
//               muted="true"
//               onMouseOver={playMovie}
//               onMouseOut={stopMovie}
//               >
//               <source src={nafas} type="video/mp4" />
//             </video>
//           </div>
//           <h1>Weddings</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea,
//             voluptate enim sapiente commodi inventore numquam, sit facere iure modi,
//             eum aliquam veritatis pariatur dolores eaque amet hic! Nisi et alias
//             voluptatum facilis sunt quasi consequatur amet, deserunt, aperiam totam
//             numquam dolor. Quos dicta magni illum maxime. Sint, dicta non!
//           </p>
//         </div>
//         <div className='slider'>
//           <Slider/>
//         </div>
//         <div className='footer'>
//           <div className='footer-img'>
//             <img src={logo} className="footer-logo" alt="logo" />
//           </div>
//           <div className='footer-text'>
//             <p>Lorem ipsum dolor sit amet consectetur</p>
//             <a
//               className="Home-link"
//               href="https://www.instagram.com/nafas.muenchen/"
//               target="_blank"
//               >
//               Join us in Instagram
//             </a>
//           </div>
//           <div className='footer-icons'>
//             <div className='bi-instagram'></div>
//             <div className='bi-facebook'></div>
//           </div>
//           <div className='Rights-text'>
//             <p>Lorem ipsum dolor sit amet consectetur</p>
//           </div>
//         </div>
//       </div>
//     </div>
//               </div>
//   )
// }
