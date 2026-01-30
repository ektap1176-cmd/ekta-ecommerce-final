import React from "react";
import Banner from "./Banner";

import StatCards from "../../pages/about/component/StatCard.jsx";
import TeamSection from "../../pages/about/component/TeamSection.jsx";
import Features from "../../pages/about/component/Features.jsx";

const AboutPage = () => {
  return (
    <div>
      <Banner />
      <StatCards />
      <TeamSection />
      <Features />
      
    </div>
  );
};

export default AboutPage;
