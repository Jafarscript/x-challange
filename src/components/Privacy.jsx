import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy">
      <h3>Privacy Policy and <br /><span className="colored">Terms</span></h3>
      <h5 className="update">Last updated on September 12, 2023</h5>
      <div className="priFlex">
      <div className="priLeft">
        <h4>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </h4>
        <div className="bordered">
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h3 className="colored">Licensing Policy</h3>
          <h4>Here are terms of our Standard License:</h4>
          <ul>
            <li>
              {/* <img src={require("../asset/list terms.png")} alt="" /> */}
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </li>
            <li>
              {/* <img src={require("../asset/list terms.png")} alt="" /> */}
              You are licensed to use the item available at any free source
              sites, for your project developement
            </li>
          </ul>
          <button className='register'>Read More</button>
        </div>
      </div>
      <div className="priRight">
        <img src={require("../asset/08 1.png")} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Privacy;
