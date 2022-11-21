import React from "react";
import Footer from "../components/footer";
import About from "../components/Home/About/About";
import Blogs from "../components/Home/Blogs/Blogs";
import Community from "../components/Home/Community/Community";
import HomeBanner from "../components/Home/HomeBanner/HomeBanner";
import Opportunity from "../components/Home/Opportunities/Opportunity";
import OurHelp from "../components/Home/OurHelp/OurHelp";
import OurPotential from "../components/Home/OurPotential/OurPortential";
import OurSolutions from "../components/Home/OurSolutions/OurSolutions";
import Revolutions from "../components/Home/Revolutions/Revolutions";
import NavBar from "../components/navbar/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <HomeBanner />
      <Revolutions />
      <OurHelp />
      <Opportunity />
      <OurSolutions />
      <OurPotential />
      <Community />
      <Blogs />
      <About />
      <Footer />
    </>
  );
}

export default Home;
