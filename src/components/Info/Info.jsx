import React from "react";
import "./Info.scss";
import { images } from "../../images";

const Info = () => {
  return (
    <div>
      <div className="info container">
        <h2 className="title1 title--darkbar">We are different</h2>
        <div className="info__content">
          <div className="info__content--title">
            <img src={images.snappy_process} alt="into_title" />
            <h3> Snappy Process</h3>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
              Lorem ipsum dolor sit amet. dolor sit amet.
            </p>
          </div>

          <div className="info__content--title">
            <img src={images.affordable_prices} alt="into_title" />
            <h3> Affotable Prices</h3>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
              Lorem ipsum dolor sit amet. dolor sit amet.
            </p>
          </div>
          <div className="info__content--title">
            <img src={images.people_first} alt="into_title" />
            <h3>People First</h3>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
              Lorem ipsum dolor sit amet. dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
