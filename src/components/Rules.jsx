import React from "react";
import "./Rules.css";

const Rules = () => {
  return (
    <div className="rule">
      <div className="rules">
        <h3>Rules and</h3>
        <h3 className="colored">Guidelines</h3>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <img src={require('../asset/7450159 1.png')} alt="" />
    </div>
  );
};

export default Rules;
