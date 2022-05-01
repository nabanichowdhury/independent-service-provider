import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 bg-dark">
      <div class="card" style={{ width: "18rem" }}>
        <img src={img} height="280px" class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="/checkout" class="btn btn-primary">
            Know Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
