import React from "react";
import Btn_secondary from "../../Reusable/Btn_secondary/Btn_secondary";
import "./OurHelp.scss";
import earth from "../../../assets/Earth2.png";
import invest from "../../../assets/invest.png";
import graph from "../../../assets/graph.png";
import sketch from "../../../assets/sketching.png";
const OurHelp = () => {
  return (
    <div className="OurHelpPage">
      <div className="OurHelp">
        <div>
          <h1 style={{ marginBottom: "1rem" }}>
            Here's How We Can <br />{" "}
          </h1>
          <h1 className="OurHelp_head_span">Help Your</h1>

          <div className="OurHelp_tabs">
            <div className="OurHelp_tabs_actions">
              <button>Find Gigs</button>
              <button className="OurHelp_btn_inactive">Hire Talent</button>
            </div>
            <p>
              Even the mightiest Superhero needs a little support, every now and
              then. Sign in now and start finding gigs at your fingertips!
            </p>
            <Btn_secondary title="Sign In" />
          </div>
        </div>
        <div>
          <div className="OurHelp_card_Container">
            <h1 className="OurHelp_card_number">1</h1>
            <div className="OurHelp_card">
              <img src={earth} />
              <div className="OurHelp_card_content">
                <h3>Access To Global Projects</h3>
                <p>
                  Explore work opportunities across the <br />
                  globe from the top clients
                </p>
              </div>
            </div>
          </div>
          <div className="OurHelp_card_Container">
            <h1 className="OurHelp_card_number">2</h1>
            <div className="OurHelp_card">
              <img src={graph} />
              <div className="OurHelp_card_content">
                <h3>Increased Visibility</h3>
                <p>
                  Connect with mentors in our community <br /> to land gigs
                  within X hours
                </p>
              </div>
            </div>
          </div>
          <div className="OurHelp_card_Container">
            <h1 className="OurHelp_card_number">3</h1>
            <div className="OurHelp_card">
              <img src={invest} />
              <div className="OurHelp_card_content">
                <h3>Zero Commission</h3>
                <p>
                  Get projects at zero commission & take <br /> home 100% of
                  your earnings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="sketch" src={sketch} />
    </div>
  );
};

export default OurHelp;
