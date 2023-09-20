import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home">
     <div className="homeLeft">
     <div className="getTech">
        <h1>getlinked Tech</h1>
        <span className="creative">
          <img
            src={require('../asset/Creative 1.png')}
            alt=""
          />
        </span>
      </div>
      <h1 className="hackathon">
        Hackathon <span className="colored">1.0</span>
      </h1>
      <div className="iconHack">
      <span>
          <img
            src={require('../asset/chain-9365116-7621444.png')}
            alt=""
          />
        </span>
        <span>
          <img
            src={require('../asset/1f4a5.png')}
            alt=""
          />
        </span>
      </div>
      <h2 className="participate">
        Participate in getlinked tech Hackathon 2023 stand a chance to win a Big
        prize
      </h2>
      <button className='register'>Register</button>
      <div className="countdown">
        <h2>00<span>H</span></h2>
        <h2>00<span>M</span></h2>
        <h2>00<span>S</span></h2>

      </div>
     </div>
     <div className="homeRight">
        <img src={require('../asset/man-wearing-smart-glasses-touching-virtual-screen 1.png')} alt="" className="man" />
        <img src={require('../asset/Image 1.png')} alt="" className="globe" />
     </div>
    </div>
  );
};

export default Homepage;