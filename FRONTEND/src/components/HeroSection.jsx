// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from "react-scroll";
const HeroSection=()=>{
  return(
<section className="hero">

  <img src="/restaurant.jpg" alt="restaurant"></img>
  <div className="item">
    <h1>DREAM MAKER</h1>
    <div>
      <h1>Your Personal Dream Maker</h1>
      <p>We believe that it is all about the BIG DREAMS and the small details!</p>
      <Link to="contact" spy={true} smooth={true} duration={500}>BOOK NOW</Link>
    </div>
  </div>
</section>

  );
};


export default HeroSection;