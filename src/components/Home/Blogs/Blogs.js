import React from "react";
import "./Blogs.scss";
import line2 from "../../../assets/bline2.png";
import line3 from "../../../assets/bline3.png";
import mic from "../../../assets/mic.png";
import Btn_tertiary from "../../Reusable/Btn_tertiary/Btn_tertiary";

const Blogs = () => {
  return (
    <div className="BlogContainer">
      <img className="mic" src={mic} />

      <div className="Blog">
        <div className="Blog_head">
          <img className="Bline1" src={line3} />
          <img className="Bline2" src={line2} />
          <img className="Bline3" src={line3} />
          <h1>Blogs</h1>
          <h3>
            "Intelligence is a privilege, and it needs to be <br /> used for the
            greater good of people."
          </h3>
          <p>- Dr. Octopus</p>
        </div>
        <div className="Blog_content">
          <div className="Blog_Content_head">
            <p className="activeTab_blog">Freelancers</p>
            <p>Recruiters</p>
            <p>Developers</p>
            <p>Designers</p>
            <p>Community</p>
            <p>Case Studies</p>
            <p>Supergigs Diaries</p>
            <p>Superlancer Success Stories</p>
          </div>
          <div className="Blog_Blogs">
            <div className="Single_blog">
              <img src="https://cdn.get.tech/blog/wp-content/uploads/2018/10/content-curation.jpg" />
              <div className="BlogTile_data">
                <p>Design</p>
                <p>24 Jun 2022</p>
              </div>
              <h5>
                The Adjustable Prosthetic Pylon delivers results on par with
                expensive composites at fraction of the cost.
              </h5>
            </div>
            <div className="Single_blog">
              <img src="https://cdn.get.tech/blog/wp-content/uploads/2018/10/content-curation.jpg" />
              <div className="BlogTile_data">
                <p>Design</p>
                <p>24 Jun 2022</p>
              </div>
              <h5>
                The Adjustable Prosthetic Pylon delivers results on par with
                expensive composites at fraction of the cost.
              </h5>
            </div>
            <div className="Single_blog">
              <img src="https://cdn.get.tech/blog/wp-content/uploads/2018/10/content-curation.jpg" />
              <div className="BlogTile_data">
                <p>Design</p>
                <p>24 Jun 2022</p>
              </div>
              <h5>
                The Adjustable Prosthetic Pylon delivers results on par with
                expensive composites at fraction of the cost.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <center>
        <Btn_tertiary title="Make Me More Informed" />
      </center>
    </div>
  );
};

export default Blogs;
