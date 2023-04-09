import React, { useState } from 'react';
import "./Home.scss";
import arrow from '../../assets/arrow.png'
import logo from '../../images/logo.png';
import main from '../../images/main.PNG'
import nafas from '../../images/nafas.mp4'
// import Dishes from "../../data/menu.json"
import { useNavigate } from 'react-router-dom';




const img = [
  <img src='https://ik.imagekit.io/1udpp4kd7/New_Folder/328156767_1592031647980857_3181544650669586076_n.jpg?updatedAt=1678804299284' className='' />,
  <img src='https://ik.imagekit.io/1udpp4kd7/New_Folder/325200699_146819674836778_5410344225198993090_n.jpg?updatedAt=1678804299271' className='' />,
  <img src='https://ik.imagekit.io/1udpp4kd7/New_Folder/326872961_1531549257354232_120490123098077366_n.jpg?updatedAt=1678804299202' className='' />,
  <img src='https://ik.imagekit.io/1udpp4kd7/New_Folder/320121903_828389901764347_7121388961272615287_n.jpg?updatedAt=1678804298891' className='' />,
  <img src='https://ik.imagekit.io/1udpp4kd7/New_Folder/312811484_788292345603619_5846794769294431941_n.jpg?updatedAt=1678804297160' className='' />,
]
const data = [
  {
    id: "1",
    icon: "",
    title: "Dish name",
    desc:
      "Something",
    img:
      'https://ik.imagekit.io/1udpp4kd7/New_Folder/326872961_1531549257354232_120490123098077366_n.jpg?updatedAt=1678804299202',
    web: ""
  },
  {
    id: "2",
    icon: "",
    title: "Dish 1",
    desc:
      "Something else",
    img:
      "https://ik.imagekit.io/1udpp4kd7/New_Folder/320121903_828389901764347_7121388961272615287_n.jpg?updatedAt=1678804298891",
    web: ""
  },
  {
    id: "3",
    icon: "",
    title: "Dish 2",
    desc:
      "Something data",
    img:
      "https://ik.imagekit.io/1udpp4kd7/New_Folder/312811484_788292345603619_5846794769294431941_n.jpg?updatedAt=1678804297160",
    web: ""
  }
];
export default function Home() {
  // const[currentSlide, setCurrentSlide] = useState(0); Не удалять! 
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate()
  function packages() {
    navigate('/packages')
  }
  const leftClick = () => {
    setActiveIndex((current) => {
      // Находим индекс следующего слайда, который должен быть выведен
      const res = current === img.length - 1 ? 0 : current + 1
      // Возвращаем индекс
      console.log(res);
      return res
    })
  };
  const rightClick = () => {
    setActiveIndex((current) => {
      // Находим индекс следующего слайда, который должен быть выведен
      const res = current === 0 ? img.length - 1 : current - 1
      // Возвращаем индекс
      console.log(res);
      return res
    })
  };

  // Находим индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
  // Находим индекс следующего слайда
  const nextImgIndex = activeIndex === img.length - 1 ? 1 : activeIndex + 1

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
        <div className="slider">
          <div className="slider-img slider-img-prev"
            key={prevImgIndex}>
            {img[prevImgIndex]}
          </div>
          <div className="slider-img"
            key={activeIndex}>
            {img[activeIndex]}
          </div>
          <div className="slider-img slider-img-next"
            key={nextImgIndex}>
            {img[nextImgIndex]}
          </div>
        </div>

        <img onClick={() => leftClick()} src={arrow} alt='' className='arrow left' />
        <img onClick={() => rightClick()} src={arrow} alt='' className='arrow right ' />
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
