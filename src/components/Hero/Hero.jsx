import React from "react";
import "./Hero.scss";
import { images } from "../../images";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__image--top">
        <picture>
          <source
            media="(mix-width:767px )"
            srcSet={images.intro_right_mobile}
          />
          <img src={images.intro_right} alt="img-right" />
        </picture>
      </div>
      <div className="hero__wrapper container">
        <div className="hero__wrapper__content">
          <h1 className="title">Humanizing your insurance</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            hic obcaecati totam, consectetur ratione provident temporibus nobis
            eligendi. Voluptate esse placeat eveniet totam aliquam recusandae
            exercitationem odio maiores quo minima?
          </p>
          <button className="btn">View Plan</button>
        </div>

        <div className="hero__image--right">
          <picture>
            <source
              media="(mix-width:767px )"
              srcSet={images.intro_right_mobile}
            />
            <img src={images.intro_desktop} alt="img-right" />
          </picture>
        </div>
      </div>

      <div className="hero__image--bottom">
        <picture>
          <source
            media="(mix-width:767px )"
            srcSet={images.intro_left_mobile}
          />
          <img src={images.intro_left} alt="img-right" />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
