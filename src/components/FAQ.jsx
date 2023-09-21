import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq">
      <div className="faqLeft">
        <h3>
          Frequently Ask
          <br />
          <span className="colored">Question</span>
        </h3>
        <p>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <div className="accordion">
          <div className="accordion-item">
            <h4>Can I work on a project I started before the hackathon?</h4>
            <span className="colored">+</span>
          </div>
          <div className="accordion-item">
            <h4>What happens if I need help during the hackathon?</h4> <span className="colored">+</span>
          </div>
          <div className="accordion-item">
            <h4>What happens if I don't have an idea for a project?</h4> <span className="colored">+</span>
          </div>
          <div className="accordion-item">
            <h4>Can I join a team or do I have to come with one?</h4> <span className="colored">+</span>
          </div>
          <div className="accordion-item">
            <h4>What happens after the hackathon ends</h4> <span className="colored">+</span>
          </div>
          <div className="accordion-item">
            <h4>Can I work on a project I started before the hackathon?</h4>
            <span className="colored">+</span>
          </div>
        </div>
      </div>
      <div className="faqRight">
        <img src={require("../asset/cwok_casual_21 1.png")} alt="" />
      </div>
    </div>
  );
};

export default FAQ;
