import React from "react";
import "./Filter.css";
import { useState, useContext } from 'react';
import { AppContext } from "../../App";
import InfiniteScroll from 'react-infinite-scroll-component';
const LIMIT = 6;
const Filter = (props) => {
const {data} = useContext(AppContext)
const [postData, setPostData] = useState(data.slice(0, LIMIT));
    const [visible, setVisible] = useState(LIMIT);
    const [hasMore, setHasMore] = useState(true);
  // const package is reserved in strict mode
  const bundle = props.package;
  const cluster = props.category;
 
  const click = (key) => {

  };

  const fetchData = () => {
    const newLimit = visible + LIMIT;
    const dataToAdd = data.slice(visible, newLimit);

    if (data.length > postData.length) {
        setTimeout(() => {
            setPostData([...postData].concat(dataToAdd));
        }, 100);
        setVisible(newLimit);
    } else {
        setHasMore(false);
    }
};

  return (
    <div>
    <InfiniteScroll
        dataLength={postData.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}>
         <div className="card_section">
        {postData &&
          // https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
          
          postData.filter((dish) => dish.package.includes(bundle))
            .filter((dish) => dish.category.includes(cluster))
            .map((dish) => {
              return (
                <div
                  key={dish.id}
                  className="card_container"
                  onClick={() => click()}
                >
                  <img src={dish.URL} className="card_image" alt="dish" />
                  <div className="overlay">
                {dish.name} ( {dish.category} )<br /> for {dish.price} <br />
                 Zutaten: {dish.ingredients}
              </div>
                </div>
              );
            })}
      </div>
        {/* {postData.map(dish =>{
            return <div key={dish.id} title={dish.title}/>
        })} */}
    </InfiniteScroll>

    {/* <div className="card_section">
        {data &&
          // https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
          
          data.filter((dish) => dish.package.includes(bundle))
            .filter((dish) => dish.category.includes(cluster))
            .map((dish) => {
              return (
                <div
                  key={dish.id}
                  className="card_container"
                  onClick={() => click()}
                >
                  <img src={dish.URL} className="card_image" alt="dish" />
                  <div className="overlay">
                {dish.name} ( {dish.category} )<br /> for {dish.price} <br />
                 Zutaten: {dish.ingredients}
              </div>
                </div>
              );
            })}
      </div> */}
      </div>
  );
};

export default Filter;