import React from "react";
	import { useState } from 'react';
	import "./Slider.css";
	

	// carousel items
	const photos = [
	  {
	    id: '1',
	    title: 'Dish name1',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/328156767_1592031647980857_3181544650669586076_n.jpg?updatedAt=1678804299284',
	  },
	  {
	    id: '2',
	    title: 'Dish name2',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/325200699_146819674836778_5410344225198993090_n.jpg?updatedAt=1678804299271',
	  },
	  {
	    id: '3',
	    title: 'Dish name3',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/326872961_1531549257354232_120490123098077366_n.jpg?updatedAt=1678804299202',
	  },
	  {
	    id: '4',
	    title: 'Dish name4',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/320121903_828389901764347_7121388961272615287_n.jpg?updatedAt=1678804298891',
	  },
	  {
	    id: '5',
	    title: 'Dish name5',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/312811484_788292345603619_5846794769294431941_n.jpg?updatedAt=1678804297160',
	  },
	  {
	    id: '6',
	    title: 'Dish name6',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/314745039_785297745865405_7341021869218931862_n.jpg?updatedAt=1678804297195',
	  },
	  {
	    id: '7',
	    title: 'Dish name7',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/319875162_560194015965645_9221237432673475214_n.jpg?updatedAt=1678804297122',
	  },
	  {
	    id: '8',
	    title: 'Dish name8',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/312823992_1889431548107945_8806827628538920087_n.jpg?updatedAt=1678804297083',
	  },
	  {
	    id: '9',
	    title: 'Dish name9',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/315067148_1505742543272984_483843554596908564_n.jpg?updatedAt=1678804297093',
	  },
	  {
	    id: 'p10',
	    title: 'Dish name10',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/312837093_1292804254819694_3185579282980503578_n.jpg?updatedAt=1678804297073',
	  },
	  {
	    id: '11',
	    title: 'Dish name11',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/312833034_852351882430138_6828767494364540818_n.jpg?updatedAt=1678804297011',
	  },
	  {
	    id: '12',
	    title: 'Dish name12',
	    url: 'https://ik.imagekit.io/1udpp4kd7/New_Folder/313227442_666668081763869_89823304136073010_n.jpg?updatedAt=1678804297033',
	  }
	];
	

	

	export default function Slider() {
	

	  // show the photo with this index
	  const [currentIndex, setCurrentIndex] = useState(0);
	

	  // move to the next photo
	  // if we are at the end, go to the first photo
	  const next = () => {
	    setCurrentIndex((currentIndex + 1) % photos.length);
	  };
	

	  // move to the previous photo
	  // if we are at the beginning, go to the last photo
	  const prev = () => {
	    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
	  };
	

	

	  return (
	    <>
	      {/* Render the carousel/slider */}
	      <div className='slider-container'>
	        {photos.map((photo) => (
	          <div
	            key={photo.id}
	

	            // if the photo is the current photo, show it
	            className={
	              photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
	            }
	          >
	            <img src={process.env.PUBLIC_URL + photo.url} alt={photo.title} className='photo' />
	            {/* background shade to show caption */}
	            <div className="shade"></div>
	            {/* name of picture from db */}
	            <div className='caption'>{photo.title}</div>
	            {/* {console.log(photo.url)}; */}
	          </div>
	        ))}
	

	        {/* Previous button */}
	        <button onClick={prev} className='prev'>
	          &lt;
	        </button>
	

	        {/* Next button */}
	        <button onClick={next} className='next'>
	          &gt;
	        </button>
	      </div>
	

	      {/* Render dots indicator */}
	      <div className='dots'>
	        {photos.map((photo) => (
	          <span
	            key={photo.id}
	            // highlight the dot that corresponds to the current photo
	            className={
	              photos[currentIndex].id === photo.id ? 'dot active' : 'dot'
	            }
	            // when the user clicks on a dot, go to the corresponding photo
	            onClick={() => setCurrentIndex(photos.indexOf(photo))}
	          ></span>
	        ))}
	      </div>
	    </>
	  );
	}
