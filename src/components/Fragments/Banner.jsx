import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/components/fragments/banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Fragment>
      <Carousel className="caraousel-container">
        <Carousel.Item interval={1000}>
          <Link to={"/product"}>
            <img
              className="image-caraousel"
              src="/images/banner1.webp"
              alt="banner1"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Link to={"/product"}>
            <img
              className="image-caraousel"
              src="/images/banner2.webp"
              alt="banner2"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={"/product"}>
            <img
              className="image-caraousel"
              src="/images/banner3.webp"
              alt="banner3"
            />
          </Link>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default Banner;
