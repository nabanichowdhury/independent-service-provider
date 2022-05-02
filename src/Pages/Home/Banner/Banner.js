import { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/Banner/banner1.jpg";
import banner2 from "../../../images/Banner/banner2.jpg";
import banner3 from "../../../images/Banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500px"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>
            Wherever the art of medicine is loved, there is also a love for
            humanity.
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="500px"
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>
            “The good physician treats the disease; the great physician treats
            the patient who has the disease.“
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="500px"
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>
            “The aim of medicine is to prevent disease and prolong life; the
            ideal of medicine is to eliminate the need of a physician.”
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
