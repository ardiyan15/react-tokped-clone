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
        <div className="button-container">
          <div className="row">
            <div className="col-md-6">
              <button className="btn btn-secondary">Masuk</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary">Daftar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
