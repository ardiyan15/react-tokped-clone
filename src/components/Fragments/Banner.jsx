import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Fragment>
      {/* <img src="/images/banner1.webp" alt="" />
        <h1>Banner Section</h1> */}
        {/* <div className="mr-5 ml-5"> */}

{/* <div className="row"> */}
      <Carousel style={{ marginLeft: "5%", marginRight: "5%", borderRadius: "30px" }}>
        <Carousel.Item interval={1000}>
          <img
            src="/images/banner1.webp"
            alt="banner1"
            style={{ width: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src="/images/banner2.webp" alt="banner2" style={{ width: "100%" }}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/images/banner3.webp" alt="banner3" style={{ width: "100%" }}/>
        </Carousel.Item>
      </Carousel>
            {/* </div> */}
            {/* </div> */}
    </Fragment>
  );
};

export default Banner;
