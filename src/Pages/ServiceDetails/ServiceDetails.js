import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <div className="text-light">
      <h1>Service number:{serviceId}</h1>
    </div>
  );
};

export default ServiceDetails;
