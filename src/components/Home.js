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

//TODO: fix slick overflow

const Home = () => {
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
      {/* <div className="pt-page homepage">
        <div className="custom-messages">
          <div className="container">
            <div className="row">
              <div className="col-md-12 messages">
                
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Home;
