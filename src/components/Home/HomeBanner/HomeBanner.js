import React from "react";
import "./HomeBanner.scss";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import HeadCircle from "../../../assets/path.png";
import earth from "../../../assets/earth.png";
import clock from "../../../assets/clock.png";
import calendar from "../../../assets/calendar.png";
import trail from "../../../assets/trail.png";
import Btn_primary from "../../Reusable/Btn_primary/Btn_primary";
import Btn_secondary from "../../Reusable/Btn_secondary/Btn_secondary";
import shines1 from "../../../assets/shines1.png";
import shines2 from "../../../assets/shines2.png";
import shines3 from "../../../assets/3.png";
const HomeBanner = () => {
  return (
    <div className="BannerContainer">
      <img className="virtual-reality-boy" src={banner1} />
      <img className="virtual-reality-boy1" src={banner2} />
      <img className="shines1" src={shines1} />
      <img className="shines3" src={shines1} />
      <img className="shines2" src={shines2} />

      <div></div>
      <div className="BannerContent">
        <img className="BannerContent_path" src={HeadCircle} />
        <h1>
          Welcome To The <br /> Future of Work
        </h1>
        <h5>The Future Belongs To The Bold</h5>
        <div className="BannerAbout">
          <div className="AboutContainer">
            <img src={earth} />
            <p>
              Access to 1000+ global <br /> freelancers
            </p>
          </div>
          <div className="AboutContainer">
            <img src={clock} />
            <p>
              Comprehensive vetting process <br /> to reduce hiring time by half
            </p>
          </div>
          <div className="AboutContainer">
            <img src={calendar} />
            <p>
              Bias-free Data-backed <br /> talent recommendations
            </p>
          </div>
          <div className="AboutContainer">
            <img src={trail} />
            <p>
              Make the most of your time with <br />
              30-days zero-risk trail
            </p>
          </div>
        </div>
        <div className="Banner_actions">
          <Btn_primary title="Find Gigs" />
          <Btn_secondary title="Hire Talent" />
        </div>
        <img className="shines4" src={shines1} />
        <img className="shines5" src={shines1} />
        <img className="shines6" src={shines2} />
      </div>
    </div>
  );
};

export default HomeBanner;
