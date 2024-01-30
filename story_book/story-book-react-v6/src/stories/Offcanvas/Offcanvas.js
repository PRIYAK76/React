import React from "react";
import "./Offcanvas.css";

const Offcanvas = (props) => {
    const {title} = props
  return (
    <div class="offcanvas-menu">
      <input type="checkbox" id="toogle-menu" />
      <label for="toogle-menu" class="toogle-open">
        <span></span>
      </label>
      <nav>
        <div>
          <a href="#">
            <i class="fab fa-css3-alt"></i>{title}
          </a>
          <label for="toogle-menu" class="toogle-close">
            <span></span>
          </label>
        </div>
        <ul>
          <li>
            <a href="#section1">Section </a>
          </li>
          <li>
            <a href="#section2">Section </a>
          </li>
          <li>
            <a href="#section3">Section </a>
          </li>
          <li>
            <a href="#section4">Section </a>
          </li>
          <li>
            <a href="#section5">Section </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Offcanvas;
