import React from "react";
import profile from "../../../assets/profile.jpg";
import star from "../../../assets/Star.png";
import "./RatingBox.scss";
const RatingBox = (props) => {
  return (
    <div className="RatingBox">
      <img className="RatingProfile" src={props.img} />
      <div className="RatingBox_Content">
        <p>{props.name}</p>
        <div className="RatingBox_rating">
          <p>{props.value}</p>
          <img src={star} />
        </div>
      </div>
    </div>
  );
};

export default RatingBox;
