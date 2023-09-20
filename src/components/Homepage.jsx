import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home">
     <div className="homeLeft">
        <h1 className="getLinked">getlinked <span className="tech">Tech <img
            src={require('../asset/Creative 1.png')}
            alt=""
          /></span> 
        </h1>
        
     
      <h1 className="hackathon">
        Hackathon <span className="hack_colored">1.0  <div className="iconHack">
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
      </div></span>
       
      </h1>
      
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
     <h1 className="revolute">Igniting a Revolution in <span className="hr">HR Innovation<svg xmlns="http://www.w3.org/2000/svg" width="220" height="17" viewBox="0 0 255 17" fill="none">
  <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5"/>
</svg></span></h1>
    </div>
  );
};

export default Homepage;
