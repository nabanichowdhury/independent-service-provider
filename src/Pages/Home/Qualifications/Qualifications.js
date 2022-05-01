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
          <p className="card-text"></p>
        </div>
      </div>
      <div className="card  bg-dark text-light color my-5 w-80">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
      <div className="card  bg-dark text-light color my-5 w-80">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
