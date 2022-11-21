import React from "react";
import "./Steps.scss";
import book from "../../../assets/book.png";
const Steps = (props) => {
  return (
    <div className={props.className} style={{ top: props.top }}>
      <img src={props.img} />
      <h1>0{props.index}</h1>
      <h3>{props.heading}</h3>
      <p>{props.para}</p>
    </div>
  );
};

export default Steps;
