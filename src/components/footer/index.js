import React from "react";
import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import footerlogo from "../../assets/footerLogo.png";
import { footerContent } from "../../contents/FooterContent";
import "./footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <div className="main">
          <div className="container py-5">
            <div className="row">
              <div className="col">
                <div className="pt-4">
                  <img
                    src={footerlogo}
                    alt="footer-logo"
                    className="footerLogo"
                  />
                  <br />
                  <div className="copyrights pt-2">
                    <p className=" copyrights-text ">
                      Copyright © 2022 Supergigs
                    </p>
                    <p className="copyrights-text pt-2">All Rights Reserved</p>
                    <p className="copyrights-text pt-2">13 xyz street, XXXXX</p>
                  </div>
                  <div className="d-flex  pt-2">
                    <span className="p-1">
                      <FaInstagram className="rounded-circle icon-size" />
                    </span>
                    <span className="p-1">
                      <FaDribbble className="rounded-circle icon-size" />
                    </span>
                    <span className="p-1">
                      <FaTwitter className="rounded-circle icon-size" />
                    </span>
                    <span className="p-1">
                      <FaYoutube className="rounded-circle icon-size" />
                    </span>
                  </div>
                </div>
              </div>

              {footerContent.content.map((item) => {
                return (
                  <div className="col">
                    <h5 className="ul-heading">
                      <strong>{item.name}</strong>
                    </h5>

                    <ul className="ul-link-names pt-4">
                      {item.footerList.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
