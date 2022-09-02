import React from "react";
import "./Banner.scss";
import { images } from "../../images";

const Banner = () => {
  return (
    <div>
      <div className="banner container">
        <picture>
          <source media="(max-width: 767px)" srcSet={images.works_mobile} />
          <img src={images.works_desktop} alt="works" />
        </picture>
        <div className="banner__wrapper">
          <div className="title">
            <h2 className="title1">
              Find Out More <br /> About How We Work
            </h2>
          </div>
          <div className="button">
            <span>How We Work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
