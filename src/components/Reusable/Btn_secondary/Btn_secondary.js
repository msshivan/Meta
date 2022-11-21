import React from "react";
import "./Btn_secondary.scss";
const Btn_secondary = (props) => {
  return (
    <button style={{ color: props.color }} className="Btn_secondary">
      {props.title}
    </button>
  );
};

export default Btn_secondary;
