import { useState } from "react";
import "../../styles/components/header.css";
import { Icon } from "../Elements/Icon/Icon";

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = () => {
    setIsFocused((prevState) => !prevState);
  };

  return (
    <div className="d-flex">
      <img src="/images/logo_tokped.svg" alt="tokopedia-logo" id="img-tokped" />
      <i className="bi bi-airplane-engines-fill"></i>
      <p id="category">Kategori</p>
      <div className="d-flex w-100">
        <div style={{ width: '100%' }}>
          <div className="w-100 d-flex">
            <div
              id={`${isFocused ? "border-focus" : ""}`}
              className="d-flex justify-content-center align-self-center border-icon"
            >
              <Icon className="align-self-center" iconName="Search" size={20} />
            </div>
            <input
              id="search-form"
              type="text"
              className="w-100 form-control search-form shadow-none"
              placeholder="Cari di Tokopedia"
              onFocus={focusHandler}
              onBlur={focusHandler}
            />
            <div className="cart-container d-flex justify-content-center">
              <Icon className="align-self-center" iconName="Cart" size={25} />
            </div>
          </div>
          <div className="w-75">
            <ul className="d-flex justify-content-around list-inline">
              <li>Sepeda Fixie</li>
              <li>Iphone 11 Pro</li>
              <li>Kipas Angin</li>
              <li>Vacuum Cleaner</li>
              <li>Dr Laser</li>
              <li>Meja Belajar</li>
            </ul>
          </div>
        </div>

        <div className="button-container mt-4 d-flex" style={{ marginLeft: '30%' }}>
          <div className="pipe-separator"></div>
          <div className="row">
            <div className="col-md-4">
              <button className="btn btn-secondary">Masuk</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary">Daftar</button>
            </div>
            {/* <div className="row" style={{ fontSize: "18px" }}> */}
            <div className="d-flex">
              <p className="w-100">
                <Icon
                  className="align-self-center"
                  iconName="GeoAlt"
                  size={25}
                />
                <span>
                  Dikirim ke <b>Jakarta Pusat</b>
                </span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 15.25a.74.74 0 0 1-.53-.22l-5-5A.75.75 0 0 1 7.53 9L12 13.44 16.47 9a.75.75 0 0 1 1.06 1l-5 5a.74.74 0 0 1-.53.25Z"></path>
                </svg>
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
