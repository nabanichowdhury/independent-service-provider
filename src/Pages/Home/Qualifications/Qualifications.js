import React from "react";
import "./Qualifications.css";

const Qualifications = () => {
  return (
    <div className="container " id="qualifications">
      <h1 className="text-light text-center m-10px">Qualifications</h1>
      <div className="card bg-dark text-light color my-5 w-80">
        <h5 className="card-header">MBBS</h5>
        <div className="card-body">
          <h5 className="card-title">Shylhet Osmani Medical College</h5>
          <p className="card-text">Batch 45 of SOMC</p>
        </div>
      </div>
      <div className="card  bg-dark text-light color my-5 w-80">
        <h5 className="card-header">FCPS</h5>
        <div className="card-body">
          <h5 className="card-title">
            Have achieved FCPS degree on gynocology and obs
          </h5>
          <p className="card-text">
            The Fellow of College of Physicians and Surgeons (FCPS) is a fellow
            of College of Physicians and Surgeons
          </p>
        </div>
      </div>
      <div className="card  bg-dark text-light color my-5 w-80">
        <h5 className="card-header">Advanced training in Laparoscopy</h5>
        <div className="card-body">
          <h5 className="card-title">Laparoscopy advanced training </h5>
          <p className="card-text">
            Laparoscopy is a type of surgical procedure that allows a surgeon to
            access the inside of the abdomen (tummy) and pelvis without having
            to make large incisions in the skin.
          </p>
        </div>
      </div>
      <div className="card  bg-dark text-light color my-5 w-80">
        <h5 className="card-header">Advanced Training In Infertility</h5>
        <div className="card-body">
          <h5 className="card-title">Specialization in Infertility</h5>
          <p className="card-text">
            Reproductive endocrinologists manage, carry out, and prescribe a
            variety of fertility tests and treatments, including IUI and IVF
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
