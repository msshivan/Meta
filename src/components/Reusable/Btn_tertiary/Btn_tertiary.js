import React from "react";
import "./Btn_tertiary.scss";
const Btn_tertiary = (props) => {
  return (
    <button id={props.id} onClick={props.onClick} className="Btn_tertiary">
      {props.title}
    </button>
  );
};

export default Btn_tertiary;
