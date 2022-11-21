import React, { useState } from "react";
import Btn_secondary from "../../Reusable/Btn_secondary/Btn_secondary";
import "./OurPotential.scss";
import arrow from "../../../assets/arrow.png";
import Steps from "../../Reusable/Steps/Steps";
import book from "../../../assets/book.png";
import notes from "../../../assets/notes.png";
import search from "../../../assets/search.png";
import roundstar from "../../../assets/roundstar.png";
import Btn_tertiary from "../../Reusable/Btn_tertiary/Btn_tertiary";

const OurPotential = () => {
  return (
    <div className="OurPotential">
      <div className="OurPotential_head">
        <div>
          <p className="OurPotential_head_content">
            We understand how daunting it can be to scout for talent that aligns
            with your business goals. Don't fret. We have your back! Connecting
            with the right talent is a cakewalk on Supergigs. You can connect,
            collaborate and start working in just 4 easy steps!
          </p>
          <Btn_secondary title="Sign In" />
        </div>
        <img src={arrow} />
        <div className="OurPotential_head_content_r">
          <h1>
            Recognize Potential,
            <br /> Build Reality
          </h1>
          <p>In 4 Easy Steps</p>
        </div>
      </div>
      <div className="OurPotential_body">
        <Steps
          className="Step"
          index={1}
          top="0px"
          heading="Define"
          para=" Briet our in-house experts about vour requirements An Idea or a
        page-long description - well hear em all!"
          img={book}
        />
        <Steps
          className="Step_even"
          index={2}
          top="250px"
          heading="Refine"
          para=" Briet our in-house experts about vour requirements An Idea or a
        page-long description - well hear em all!"
          img={roundstar}
        />
        <Steps
          className="Step"
          index={3}
          top="500px"
          heading="Appraise"
          para=" Briet our in-house experts about vour requirements An Idea or a
        page-long description - well hear em all!"
          img={search}
        />
        <Steps
          className="Step_even"
          index={4}
          top="750px"
          heading="Collaborate"
          para=" Briet our in-house experts about vour requirements An Idea or a
        page-long description - well hear em all!"
          img={notes}
        />
      </div>
      <center>
        <Btn_tertiary title="Explore" />
      </center>
    </div>
  );
};

export default OurPotential;
