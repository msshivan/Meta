import React from "react";
import "./Opportunity.scss";
import Opportunity_cart from "../../../assets/opportunity.png";
const Opportunity = () => {
  return (
    <div className="Opportunity">
      <img src={Opportunity_cart} />
      <div className="Opportunity_content">
        <h1>
          Contractual <span>Opportunities</span>{" "}
        </h1>
        <h5>
          Team Avengers wasn't build in a day, neither <br />
          defeated Thanos in a day.
        </h5>
        <h3>But Guess What? You Can!</h3>
        <p>
          We understand your missions require long time to accomplish and for
          that, we have our team of Superheroes ready to deploy for a
          contractual business need.
        </p>
      </div>
    </div>
  );
};

export default Opportunity;
