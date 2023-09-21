import React from "react";
import "./Prize.css";

const Prize = () => {
  return (
    <div className="prize">
      <div className="prizeTop">
        <div>
        <h3>
          Prizes and<br /><span className="colored">Rewards</span>
        </h3>
        <p>
          Highlight of the prizes or rewards for winners and for participants.
        </p>
        </div>
      </div>
      <div className="prizeMain">
        <div className="prizeImg">
            <img src={require('../asset/9486889 1.png')} alt="" />
        </div>
        <div className="hackPrize">
            <div className="snd">
                <img src={require('../asset/silver_medal 1.png')} alt="" />
                <h2>2nd</h2>
                <h3>Runner</h3>
                <h4 className="colored">N300,000</h4>
            </div>
            <div className="fst">
                <img src={require('../asset/gold_medal 1.png')} alt="" />
                <h2>1st</h2>
                <h3>Runner</h3>
                <h4 className="colored">N400,000</h4>
            </div>
            <div className="trd">
                <img src={require('../asset/bronze_medal 1.png')} alt="" />
                <h2>3rd</h2>
                <h3>Runner</h3>
                <h4 className="colored">N150,000</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
