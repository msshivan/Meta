import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

function Findgigslanding() {
  return (
    <div>
      <NavBar />
      <Link to="/profile-info">Click here to go profile settings</Link>
    </div>
  );
}

export default Findgigslanding;
