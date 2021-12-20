import React from "react";
import "./Banner.css";
import bgimg from './../../../images/janitor-26852.jpg';
const Banner = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="banner_text">
            <h2 data-aos="fade-up" data-aos-duration="700">Best Cleaning Services And Affordable <span>Prices!</span></h2>
            <p data-aos="fade-up" data-aos-duration="900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea neque nam laborum odit animi minima, sapiente qui odio autem iure tempore deleniti ratione maiores sunt assumenda, recusandae at voluptatibus?</p>
            <button data-aos="fade-up" data-aos-duration="1100" className='mt-3'>Learn More</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1100">
          <img src={bgimg} alt="Banner" className='w-100' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
