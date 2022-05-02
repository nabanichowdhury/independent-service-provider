import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";

const Service = ({ service }) => {
  const { name, description, img, id } = service;
  const navigate = useNavigate();
  const handleServiceButton = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 bg-dark">
      <div
        class="card  border-0 rounded-3 "
        style={{ width: "18rem", height: "30rem" }}
      >
        <img src={img} height="280px" class="card-img-top" alt="..." />
        <div className="card-body bg-secondary">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a
            class="btn btn-primary"
            onClick={() => {
              handleServiceButton(id);
            }}
          >
            Know Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
