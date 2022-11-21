import React from "react";
import "./RevolutionBox.scss";
import girl1 from "../../../assets/girl1.png";

const RevolutionBox = (props) => {
  return (
    <div className="RevolutionBox">
      <div className="RevolutionBox_img">
        <img src={props.img} />
      </div>
      <p>{props.para}</p>
    </div>
  );
};

export default RevolutionBox;
