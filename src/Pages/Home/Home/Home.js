import React from "react";
import Banner from "../Banner/Banner";
import Qualifications from "../Qualifications/Qualifications";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home" className="bg-dark">
      <Banner></Banner>
      <Services></Services>
      <Qualifications></Qualifications>
    </div>
  );
};

export default Home;
