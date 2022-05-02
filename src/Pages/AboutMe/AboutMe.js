import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="text-white">
      <h1 className="text-center">About me</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <img width="500px" src="https://i.ibb.co/12HXvHr/trima.png" alt="" />
        </div>
        <div className="m-5">
          <h1>I Will Try Hard and fast to Achieve My Goal</h1>

          <p>
            Hello I am Nabani.My goal is to achieve something which is a dream
            for others.I want to be the CEO of Google.I know this seems a bit
            strange but I know oneday I will do that also.I want to learn web
            development in the finest way and want to achieve full marks in
            assingment 11th and 12th.I am very determined this time though I
            have missed deadline of 3 assingments....But its okay....I am
            working Hard To got my job done.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
