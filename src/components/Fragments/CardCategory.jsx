import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import { Icon } from "../Elements/Icon/Icon";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/components/fragments/cardcategory.css";
// import "../../styles/main.css"

const CardCategory = () => {
  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slideToScroll: 1,
  };

  return (
    <div className="w-100 mt-4">
      <Card className="shadow">
        <Card.Body>
          <div className="row">
            <div className="col-md-6">
              <Card.Title>
                <h4 style={{ fontWeight: "bold" }}>Kategori Pilihan</h4>
                <Slider {...settings}>
                  <div>
                    <img
                      src="/images/product1.webp"
                      alt=""
                      style={{
                        border: "1px solid #dee2e6",
                        borderRadius: "15px",
                        width: "70%",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src="/images/product2.webp"
                      alt=""
                      style={{
                        border: "1px solid #dee2e6",
                        borderRadius: "15px",
                        width: "70%",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src="/images/product3.webp"
                      alt=""
                      style={{
                        border: "1px solid #dee2e6",
                        borderRadius: "15px",
                        width: "70%",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src="/images/product4.webp"
                      alt=""
                      style={{
                        border: "1px solid #dee2e6",
                        borderRadius: "15px",
                        width: "70%",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src="/images/product5.webp"
                      alt=""
                      style={{
                        border: "1px solid #dee2e6",
                        borderRadius: "15px",
                        width: "70%",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src="/images/product6.webp"
                      alt=""
                      style={{
                        border: "1px solid #dee2e6",
                        borderRadius: "15px",
                        width: "70%",
                      }}
                    />
                  </div>
                </Slider>
              </Card.Title>
            </div>
            <div className="col-md-6">
              <Card.Title>
                <div className="d-flex">
                  <h4 style={{ marginRight: "10px", fontWeight: "bold" }}>
                    Top Up & Tagihan
                  </h4>
                  <a className="text-link-primary mt-1" href="">
                    Lihat Semua
                  </a>
                </div>
                <div
                  style={{
                    border: "1px solid #dee2e6",
                    height: "160px",
                    borderRadius: "15px",
                  }}
                >
                  <ul
                    style={{
                      borderBottom: "1px solid #dee2e6",
                      height: "50px",
                      lineHeight: "45px",
                    }}
                    className="d-flex justify-content-around list-inline"
                  >
                    <li
                      className="w-100 text-center"
                      style={{
                        fontWeight: "bold",
                        color: "#00AA5B",
                        borderBottom: "3px solid #00AA5B",
                      }}
                    >
                      Pulsa
                    </li>
                    <li className="w-100 text-center">Paket Data</li>
                    <li className="w-100 text-center">Flight</li>
                    <li className="w-100 text-center">Listrik PLN</li>
                    <li>
                      <Icon
                        className="align-self-center"
                        iconName="ThreeDotsVertical"
                        size={25}
                      />
                    </li>
                  </ul>
                  <div>
                    <div className="row px-3" style={{ height: "50px" }}>
                      <div className="col-md-6">
                        <span>Nomor Telepon</span>
                        <input
                          type="text"
                          className="form-control mt-2"
                          placeholder="Masukan Nomor"
                          style={{ height: "50px" }}
                        />
                      </div>
                      <div className="col-md-6">
                        <span>Nominal</span>
                        <div className="row">
                          <div className="col-md-9">
                            <select
                              name=""
                              id=""
                              className="form-control form-select  mt-2"
                              style={{ height: "50px" }}
                            >
                              <option value=""></option>
                            </select>
                          </div>
                          <div className="col-md-1 mt-2">
                            <button className="btn btn-disabled">Beli</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Title>
            </div>
            <ul className="d-flex justify-content-around list-inline mt-5">
              <li>
                <div
                  className="d-flex justify-content-center align-items-center p-1"
                  style={{ border: "1px solid #dee2e6", borderRadius: "15px" }}
                >
                  <img
                    src="icons/category.png"
                    alt="category"
                    style={{
                      width: "25%",
                      marginRight: "5px",
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Kategori
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="d-flex justify-content-center align-items-center p-1"
                  style={{ border: "1px solid #dee2e6", borderRadius: "15px" }}
                >
                  <img
                    src="icons/handphone.png"
                    alt="handphone"
                    style={{
                      width: "12%",
                      marginRight: '5px'
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Handphone & Tablet
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="d-flex justify-content-center align-items-center py-1"
                  style={{ border: "1px solid #dee2e6", borderRadius: "13px" }}
                >
                  <img
                    src="icons/top-up.png"
                    alt="category"
                    style={{
                      width: "15%",
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Top-Up & Tagihan
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="d-flex justify-content-center align-items-center py-1"
                  style={{ border: "1px solid #dee2e6", borderRadius: "13px" }}
                >
                  <img
                    src="icons/electronic.png"
                    alt="category"
                    style={{
                      width: "15%",
                      marginRight: '5px'
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Elektronik
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="d-flex justify-content-center align-items-center py-1"
                  style={{ border: "1px solid #dee2e6", borderRadius: "13px" }}
                >
                  <img
                    src="icons/pet.png"
                    alt="category"
                    style={{
                      width: "15%",
                      marginRight: '5px'
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Perawatan Hewan
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="d-flex justify-content-center align-items-center py-1"
                  style={{ border: "1px solid #dee2e6", borderRadius: "13px" }}
                >
                  <img
                    src="icons/travel.png"
                    alt="category"
                    style={{
                      width: "13%",
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Travel & Entertainment
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="d-flex justify-content-center align-items-center py-1"
                  style={{ border: "1px solid #dee2e6", borderRadius: "13px" }}
                >
                  <img
                    src="icons/finance.png"
                    alt="category"
                    style={{
                      width: "16%",
                      marginRight: '5px'
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Keuangan
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCategory;
