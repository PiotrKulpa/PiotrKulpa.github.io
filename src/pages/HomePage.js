import React from 'react';
import Slider from "react-slick";

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000
};

function HomePage() {
  return (
    <>
    <div className="custom-home-background"></div>
    <div className="custom-messages">
    <Slider {...settings} >
      <div>
        <h2>Welcome<br />to my Universe</h2>
      </div>
      <div>
        <h2>I work to make<br />a better web</h2>
      </div>
      <div>
        <h2>Check out<br />all my work</h2>
      </div>
    </Slider>
    </div>
  </>
  )
}

export default HomePage;
