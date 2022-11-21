import React from "react";
import "./Revolutions.scss";
import line1 from "../../../assets/line1.png";
import line2 from "../../../assets/line2.png";
import line3 from "../../../assets/line3.png";
import girl1 from "../../../assets/girl1.png";
import group1 from "../../../assets/group1.png";
import socialmedia from "../../../assets/socialmedia.png";
import Homeperson2 from "../../../assets/Homeperson2.png";
import RevolutionBox from "../../Reusable/RevolutionBox/RevolutionBox";
import Btn_tertiary from "../../Reusable/Btn_tertiary/Btn_tertiary";
const Revolutions = () => {
  var x = "</>";
  return (
    <div className="Revolutions">
      <img className="line1" src={line3} />
      <img className="line2" src={line1} />
      <img className="line3" src={line2} />

      <h2>If You Wish To Start A Revolution...</h2>
      <h1>You Call A {x}</h1>
      <p className="Revolutions_slogan">
        ..For Truth, Justice. And a Better Tomorrow
      </p>
      <div className="RevolutionsContent">
        <img src={Homeperson2} />
        <div>
          <p>
            <span className="BigPercent">53%</span> of New Mothers Leave Their
            Jobs.
            <br></br>
            While Only <span className="SmallPercent">27%</span> Return.
            Wondering How We Can Change This Together ?.
          </p>
        </div>
      </div>
      <div className="RevolutionsBoxs">
        <RevolutionBox para="Financial Freedom & Empowerment" img={girl1} />
        <RevolutionBox
          para="Shared Opportunities & Unwavering Community Support"
          img={group1}
        />
        <RevolutionBox
          para="Enhanced Work-Life Integration"
          img={socialmedia}
        />
      </div>
      <div className="Revolution_action">
        <center>
          <Btn_tertiary title="Explore" />
        </center>
      </div>
    </div>
  );
};

export default Revolutions;
