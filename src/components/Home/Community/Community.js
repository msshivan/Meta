import React from "react";
import Btn_primary from "../../Reusable/Btn_primary/Btn_primary";
import "./Community.scss";
import insta from "../../../assets/Insta.png";
import link from "../../../assets/link.png";
import fb from "../../../assets/fb.png";
import star1 from "../../../assets/shines1.png";
import star2 from "../../../assets/shines2.png";
import profile from "../../../assets/profile.jpg";

const Community = () => {
  return (
    <div className="Community_container">
      <img className="profile_1" src={profile} />
      <img className="profile_2" src={profile} />
      <img className="profile_3" src={profile} />

      <div className="Community">
        <h4>FEEL SEEN. GET HEARD. START GIGGING</h4>
        <h1>Supergigs Community</h1>
        <p>
          Guess what Superman, Iron Man, Wonder Woman, and Captain Marvel have
          in common (apart from being super awesome, duh)? They're all
          empathetic, skilled, live life on their own terms, and have a
          close-knit community they can fall back on!
        </p>
        <p>
          We at SuperGigs, believe in nurturing talent and fueling their
          professional growth by providing the support they need. Come, join our
          niche-based community and let's drive the freelance revolution
          together!
        </p>
        <Btn_primary title="Join Community" />

        <div className="Community_socialmedia">
          <img src={insta} />
          <img src={fb} />
          <img src={link} />
        </div>
      </div>
    </div>
  );
};

export default Community;
