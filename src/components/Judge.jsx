import React from "react";
import './Judge.css'

const Judge = () => {
  return (
    <div className="judge">
     <div className="judgeleft">
     <img src={require("../asset/8046554 1.png")} alt="" />
     </div>
      <div className="judgeRight">
        <h3>
          Judging Criteria
          <br />
          <span className="colored">Key attributes</span>
        </h3>
        <p>
          <span className="colored">Innovation and Creativity:</span> Evaluate the uniqueness and creativity of
          the solution. Consider whether it addresses a real-world problem in a
          novel way or introduces innovative features.
        </p>
        <p>
        <span className="colored">Functionality:</span> Assess how well the solution works. Does it perform its
          intended functions effectively and without major issues? Judges would
          consider the completeness and robustness of the solution.
        </p>
        <p>
        <span className="colored">Impact and Relevance:</span> Determine the potential impact of the solution
          in the real world. Does it address a significant problem, and is it
          relevant to the target audience? Judges would assess the potential
          social, economic, or environmental benefits.
        </p>
        <p>
        <span className="colored">Technical Complexity:</span> Evaluate the technical sophistication of the
          solution. Judges would consider the complexity of the code, the use of
          advanced technologies or algorithms, and the scalability of the
          solution.
        </p>
        <p>
        <span className="colored">Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered
          to the rules and guidelines of the hackathon, including deadlines, use
          of specific technologies or APIs, and any other competition-specific
          requirements.
        </p>
        <button className="register">Read More</button>
      </div>
    </div>
  );
};

export default Judge;
