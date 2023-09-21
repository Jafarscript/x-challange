import React from "react";
import "./Partner.css";

const Partner = () => {
  return (
    <div>
      <h3>Partners and Sponsors</h3>
      <p>
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <div className="logoGrid">
        <div className="image1">
            <img src={require('../asset/Liberty company logo white colour.png')} alt="" />
        </div>
        <div className="image1">
            <img src={require('../asset/Liberty company logo white.png')} alt="" />
        </div>
        <div className="image1">
            <img src={require('../asset/Winwise logo White colour 1.png')} alt="" />
        </div>
        <div className="image1">
            <img src={require('../asset/wisper logo white.png')} alt="" />
        </div>
        <div className="image1">
            <img src={require('../asset/Paybox.png')} alt="" />
        </div>
        <div className="image1"></div>
      </div>
    </div>
  );
};

export default Partner;
