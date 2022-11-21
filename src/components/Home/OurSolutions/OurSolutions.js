import React from "react";
import RatingBox from "../../Reusable/RatingBox/RatingBox";
import "./OurSolutions.scss";
import profile from "../../../assets/profile.jpg";
import solution from "../../../assets/solution.png";
import Btn_tertiary from "../../Reusable/Btn_tertiary/Btn_tertiary";
const OurSolutions = () => {
  return (
    <div className="OurSolutions">
      <h1>
        <span>One Platform,</span> Tailored Solutions
      </h1>
      <p className="OurSolutions_para">
        We've got Spider Men for every web neck of Flash for science-y needs,
        She- <br />
        Hulks for all the paperwork, Clan of Wasp for designing gigs, and many
        more!
      </p>
      <div class="mb-3 OurSolutionsInputContainer">
        <span id="basic-addon1">@</span>
        <input
          type="text"
          placeholder="3,2,1..Let The Hunt For Ideal Candidate Begin!"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div>
        <div className="OurSolutions_rations">
          <p>Designer</p>
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <p className="OurSolutions_totalRating">+122 </p>
        </div>
        <div className="OurSolutions_rations">
          <p>Designer</p>
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <p className="OurSolutions_totalRating">+122 </p>
        </div>
        <div className="OurSolutions_rations">
          <p>Designer</p>
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <p className="OurSolutions_totalRating">+122 </p>
        </div>
        <div className="OurSolutions_rations">
          <p>Designer</p>
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <p className="OurSolutions_totalRating">+122 </p>
        </div>
        <div className="OurSolutions_rations">
          <p>Designer</p>
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <RatingBox img={profile} name="Jhon Smith" value="4.5" />
          <p className="OurSolutions_totalRating">+122 </p>
        </div>
      </div>
      <Btn_tertiary title="Explore" />
      <img className="solutionImg" src={solution} />
    </div>
  );
};

export default OurSolutions;
