import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/components/fragments/banner.css"

const Banner = () => {
  return (
    <Fragment>
      <Carousel className="caraousel-container">
        <Carousel.Item interval={1000}>
          <img
            className="image-caraousel"
            src="/images/banner1.webp"
            alt="banner1"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="image-caraousel"
            src="/images/banner2.webp"
            alt="banner2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-caraousel"
            src="/images/banner3.webp"
            alt="banner3"
          />
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default Banner;
