import React from "react";
import img1 from "../../../images/ServicesImage/img1.jpg";
import img2 from "../../../images/ServicesImage/img2.jpg";
import img3 from "../../../images/ServicesImage/img3.jpg";
import img4 from "../../../images/ServicesImage/img4.jpg";
import img5 from "../../../images/ServicesImage/img5.jpg";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Normal Delivery",
      description: "one",
      img: "https://i.ibb.co/gmRwT19/img1.jpg",
    },
    {
      id: 2,
      name: "Cesarean Section",
      description: "two",
      img: "https://i.ibb.co/DpMvzvv/img2.jpg",
    },
    {
      id: 3,
      name: "Abdominal Hysterectomy",
      description: "three",
      img: "https://i.ibb.co/9gXg1kk/img3.jpg",
    },
    {
      id: 4,
      name: "Laparotomy",
      description: "four",
      img: "https://i.ibb.co/9tgFmSj/img4.jpg",
    },
    {
      id: 5,
      name: "DNC",
      description: "five",
      img: "https://i.ibb.co/LRzzhTP/img5.jpg",
    },
  ];
  return (
    <div className="container" id="services">
      <h1 className="text-center text-white my=5px">My Services</h1>
      <div className="row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
