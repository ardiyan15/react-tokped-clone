import { useRef } from "react";

import Card from "react-bootstrap/Card";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/components/fragments/cardcategory.css'

const CardCategory = () => {
  const scrollContainerRef = useRef(null);

  // const handleScrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollLeft -= 50;
  //   }
  // };
  
  // const handleScrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollLeft += 50;
  //   }
  // };

  const smoothScroll = (element, target, duration) => {
    const start = element.scrollLeft;
    const change = target - start;
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, start, change, duration);
      element.scrollLeft = run;
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animateScroll);
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      smoothScroll(scrollContainerRef.current, scrollContainerRef.current.scrollLeft - 100, 500); // Scrolls 50px to the right over 500ms
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      smoothScroll(scrollContainerRef.current, scrollContainerRef.current.scrollLeft + 100, 500);
    }
  };

  const settings = {
    // arrows: true,
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slideToScroll: 1,
  }
  
  return (
    <div className="w-100 mt-4">
      <Card className="shadow">
        <Card.Body>
          <div className="row">
            <div className="col-md-6">
              <Card.Title>
                <h4 className="font-weight-bold">Kategori Pilihan</h4>
                {/* <div style={{ paddingRight: '0px' }}> */}
                  <Slider {...settings}>
                {/* <div ref={scrollContainerRef} className="d-flex justify-content-between" style={{ zIndex: '-10' }}> */}
                  <div>
                    <img src="/images/product1.webp" alt="" style={{ border: "1px solid black", borderRadius: '15px', width: '70%' }}/>
                  </div>
                  <div>
                    <img src="/images/product2.webp" alt="" style={{ border: "1px solid black", borderRadius: '15px', width: '70%' }}/>
                  </div>
                  <div>
                    <img src="/images/product3.webp" alt="" style={{ border: "1px solid black", borderRadius: '15px', width: '70%' }}/>
                  </div>
                  <div>
                    <img src="/images/product4.webp" alt="" style={{ border: "1px solid black", borderRadius: '15px', width: '70%' }}/>
                  </div>
                  <div>
                    <img src="/images/product5.webp" alt="" style={{ border: "1px solid black", borderRadius: '15px', width: '70%' }}/>
                  </div>
                  <div>
                    <img src="/images/product6.webp" alt="" style={{ border: "1px solid black", borderRadius: '15px', width: '70%' }}/>
                  </div>
                  </Slider>
                  {/* </div> */}
                {/* </div> */}
                  <button onClick={handleScrollLeft}>scroll left</button>
                  <button onClick={handleScrollRight}>scroll right</button>
              </Card.Title>
            </div>
            <div className="col-md-6">
              <Card.Title>
                <h4 className="font-weight-bold">Top Up & Tagihan</h4>
                <div className="d-flex justify-content-center">
                <h1>asdds</h1>
                </div>
              </Card.Title>
            </div>
          </div>
          <Card.Text>
            test
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCategory;
