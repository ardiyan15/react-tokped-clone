import { useState } from "react";
import "../../styles/components/header.css";
import { Icon } from "../Elements/Icon/Icon";

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = () => {
    setIsFocused(prevState => !prevState)
  };

  return (
    <div className="d-flex">
      <img
        src="/images/logo_tokped.svg"
        alt="tokopedia-logo"
        id="img-tokped"
      />
      <i className="bi bi-airplane-engines-fill"></i>

      <p id="category">Kategori</p>
      {/* <div className="flex"> */}
      <div className="d-flex justify-content-center w-100">
        <div
          id={`${isFocused ? "border-focus" : ""}`}
          className="d-flex justify-content-center align-self-center border-icon"
        >
          <Icon className="align-self-center" iconName="Search" size={20} />
        </div>
        <input
          id="search-form-1"
          type="text"
          className="w-100 form-control search-form shadow-none"
          placeholder="Cari di Tokopedia"
          onFocus={focusHandler}
          onBlur={focusHandler}
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
