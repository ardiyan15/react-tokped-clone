import { Icon } from "../Elements/Icon/Icon";
import Button from "../Elements/Button/Index";
import Input from "../Elements/Input/Index";
import HeaderProduct from "./HeaderProduct";

import "../../styles/components/header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const isFocused = useSelector((state) => state.focused.status);
  const isScroll = useSelector((state) => state.focused.isScroll);

  return (
    <>
      <div className="d-flex w-100 bg-white">
        <Link to={"/"}>
          <img
            src="/images/logo_tokped.svg"
            alt="tokopedia-logo"
            id="img-tokped"
          />
        </Link>
        <i className="bi bi-airplane-engines-fill"></i>
        <p id="category">Kategori</p>
        <div className="d-flex w-100">
          <div style={{ width: "78%" }}>
            <div className="w-100 d-flex">
              <div
                id={`${isFocused ? "border-focus" : ""}`}
                className="d-flex justify-content-center align-self-center border-icon"
              >
                <Icon
                  className="align-self-center"
                  iconName="Search"
                  size={20}
                />
              </div>
              <Input id="search-form" />
              <div className="cart-container d-flex justify-content-center">
                <Icon className="align-self-center" iconName="Cart" size={25} />
              </div>
            </div>
            <div className="w-75 mt-3">
              <ul className="d-flex justify-content-around list-inline">
                <li>Sepeda Fixie</li>
                <li>Iphone 11 Pro</li>
                <li>Kipas Angin</li>
                <li>Vacuum Cleaner</li>
                <li>Dr Laser</li>
                <li>Meja Belajar</li>
              </ul>
            </div>
            {isScroll >= 1400 && isScroll <= 1900 && <HeaderProduct />}
          </div>

          <div className="mt-4 d-flex" style={{ marginRight: "-15%" }}>
            <div className="pipe-separator"></div>
            <div className="d-flex flex-column button-container">
              <div className="d-flex">
                <Button classname="btn btn-secondary btn-login">Masuk</Button>
                <Button classname="btn btn-primary">Daftar</Button>
              </div>
              <div className="d-flex mt-4">
                <p style={{ width: "250px" }}>
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
            </div>
          </div>
        </div>
      </div>
      <hr id="hr" />
    </>
  );
};

export default Header;
