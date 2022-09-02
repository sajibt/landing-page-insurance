import React from "react";
import "./Header.scss";
import { images } from "../../images";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  function handleMenu(e) {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <div>
      <header>
        <nav className="navbar container">
          <div className="navbar__logo">
            <img src={images.logo} alt="logo" />
          </div>
          <ul className={open ? "navbar__items__active" : "navbar__items"}>
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
            <li
              className={
                open ? "navbar__items__active__btn" : "navbar__items__btn"
              }>
              {" "}
              View Plans
            </li>
          </ul>
          <div className="navbar__hamburger">
            <img src={images.hamburger} alt="hamburge" onClick={handleMenu} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
