import React from "react";
import "./Partner.css";

const Partner = () => {
  return (
    <div className="partner">
      <h3>Partners and Sponsors</h3>
      <p>
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
     <div className="grid">
     <div className="logoGrid">
       <div className="topgrid">
       <div className="image1">
            <img src={require('../asset/Liberty company logo white colour.png')} alt="" />
        </div>
        <span className="hline"></span>
        <div className="image2">
            <img src={require('../asset/Liberty company logo white.png')} alt="" />
        </div>
        <span className="hline"></span>
        <div className="image3">
            <img src={require('../asset/Winwise logo White colour 1.png')} alt="" />
        </div>
       </div>
       <div className="lines">
       <span className="wline"></span>
       <span className="wline"></span>
       <span className="wline"></span>
       </div>
        <div className="bottomgrid">
        <div className="image4">
            <img src={require('../asset/wisper logo white.png')} alt="" />
        </div>
        <span className="hline"></span>
        <div className="image5">
            <img src={require('../asset/Paybox.png')} alt="" />
        </div>
        <span className="hline"></span>
        <div className="image6">
            <img src={require('../asset/Vizual Plus.png')} alt="" />
        </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Partner;
