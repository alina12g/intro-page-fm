import React from "react";
import hero from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.png";
import audiophile from "../images/client-audiophile.png";
import meet from "../images/client-meet.png";
import maker from "../images/client-maker.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1>
          Make <br />
          remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="btn-learn">Learn more</button>
        <div className="banner-logos">
          <img src={databiz} alt="Logo Databiz" />
          <img src={audiophile} alt="Logo audio phile" />
          <img src={meet} alt="Logo meet" />
          <img src={maker} alt="Logo maker" />
        </div>
      </div>
      <div>
        <img src={hero} className="banner-image" alt="Man using computer" />
      </div>
    </div>
  );
};
export default Banner;
