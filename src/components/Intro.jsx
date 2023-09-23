import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <img src={require("../asset/the big idea 1.png")} alt="" />
      <div className="intro_message">
        <h3>Introduction to getlinked <br /><span className="colored">tech Hackathon 1.0</span></h3>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
};

export default Intro;
