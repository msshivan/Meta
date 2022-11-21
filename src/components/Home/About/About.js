import React from "react";
import "./About.scss";
import smile from "../../../assets/Smiley.png";
import heart from "../../../assets/Heart.png";
import Qutoes from "../../../assets/Qutoes.png";
import profile from "../../../assets/profile.jpg";
import boy from "../../../assets/boy.png";
import arroww from "../../../assets/arroww.png";
import Btn_tertiary from "../../Reusable/Btn_tertiary/Btn_tertiary";
const About = () => {
  return (
    <div className="About">
      <img className="Smiely" src={smile} />
      <img className="heart" src={heart} />
      <div className="About_head">
        <h1>
          Here's What Our Freelancing Superheroes <br /> Have To Say About Us
        </h1>
        <p>
          The new-age superheroes are breaking the shackles of <br />{" "}
          traditional work with SuperGigs!
        </p>
      </div>
      <div className="About_body">
        <div className="About_body_actions">
          <div className="About_person_active">
            <img src={profile} />

            <div className="person_name_active">
              <h6>Santhosh</h6>
              <p>Designer</p>
            </div>
          </div>
          <div className="About_person">
            <img src={profile} />

            <div className="person_name">
              <h6>Santhosh</h6>
              <p>Designer</p>
            </div>
          </div>
          <div className="About_person">
            <img src={profile} />

            <div className="person_name">
              <h6>Santhosh</h6>
              <p>Designer</p>
            </div>
          </div>
          <div className="About_person">
            <img src={profile} />

            <div className="person_name">
              <h6>Santhosh</h6>
              <p>Designer</p>
            </div>
          </div>
        </div>
        <div className="About_body_content">
          <img src={Qutoes} />
          <h5>It was a greate experience !!</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in
          </p>
          <p>
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="About_highlight">
        <img className="About_png" src={boy} />
        <div className="About_highlightBox">
          <h3>
            "Willpower, as you know, is a lot like <br /> gravity. All it takes
            is a little push."
          </h3>
          <p>
            Ready To Push Yourself A Little More And <br /> Find Gigs You
            Deserve?
          </p>
          <Btn_tertiary title="I'm Ready To Level Up" />
          <img className="About_arrow" src={arroww} />
        </div>
      </div>
    </div>
  );
};

export default About;
