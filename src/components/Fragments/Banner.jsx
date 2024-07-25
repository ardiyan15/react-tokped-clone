import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Fragment>
      <div className="container">
        {/* <img src="/images/banner1.webp" alt="" />
        <h1>Banner Section</h1> */}
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src="/images/banner1.webp" alt="banner1" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src="/images/banner2.webp" alt="banner2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/banner3.webp" alt="banner3" />
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Banner;
