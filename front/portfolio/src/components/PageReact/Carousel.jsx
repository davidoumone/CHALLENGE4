import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const APP_URL = process.env.REACT_APP_API_BASE_URL;

export default ({ media }) => (
  <Carousel autoPlay>
    {media.map((item) => (
      <div>
        <img
          alt={item.alt}
          src={`${APP_URL}/images/carouselReactHerodex/${item.file_name}`}
        />
        <p className="legend">{item.alt}</p>
      </div>
    ))}
    {/* <div>
      <img
        alt=""
        src="https://cdn.pixabay.com/photo/2015/11/27/20/28/florence-1066314__340.jpg"
      />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img
        alt=""
        src="https://cdn.pixabay.com/photo/2015/11/27/20/28/florence-1066314__340.jpg"
      />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img
        alt=""
        src="https://cdn.pixabay.com/photo/2015/07/05/13/44/beach-832346__340.jpg"
      />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img
        alt=""
        src="https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863__340.jpg"
      />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img
        alt=""
        src="https://cdn.pixabay.com/photo/2013/04/11/19/46/louvre-102840__340.jpg"
      />
      <p className="legend">Legend 5</p>
    </div> */}
  </Carousel>
);
