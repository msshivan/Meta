import React from "react";
import LinkedInSignUpConfirm from "../components/signin-signup/LinkedInSignUpConfirm";
import SignInSignUp from "../components/signin-signup/SignInSignUp";
import ProfileSettings from "../pages/findgigs";
import Page1 from "../pages/findgigs/page1/page1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page2 from "../pages/findgigs/page2/page2";
import Page3 from "../pages/findgigs/page3/page3";
import Page4 from "../pages/findgigs/page4/page4";
import Findgigslanding from "../pages/landinpage/Findgigslanding";
import Home from "../pages/landinpage/Home";

const Router_page = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/profile-info" element={<ProfileSettings />} />
          <Route path="/signin" element={<SignInSignUp />} />
          <Route path="/find-gigs" element={<Findgigslanding />} />
          <Route path="/confirmsignup" element={<LinkedInSignUpConfirm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Router_page;
