import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setIsScroll } from "../redux/slices/focusedSlice";

import Navbar from "../components/Layouts/Navbar";
import Banner from "../components/Fragments/Banner";
import Header from "../components/Fragments/Header";
import CardCategory from "../components/Fragments/CardCategory";
import Promo from "../components/Fragments/Promo";
import HeaderProduct from "../components/Fragments/HeaderProduct";
import Trend from "../components/Fragments/Trend";
import "../styles/pages/home.css";
import Products from "../components/Fragments/Products";
import Footer from "../components/Fragments/Footer";

const Home = () => {
  const isScroll = useSelector((state) => state.focused.isScroll);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      dispatch(setIsScroll(window.scrollY));
    });
  }, [isScroll]);

  return (
    <>
      <div className={isScroll > 0 ? "fixed-top shadow" : ""}>
        <Navbar />
        <Header />
      </div>
      <div className="content-body">
        <Banner />
        <CardCategory />
        <Promo />
        <Trend />
      </div>
      <div>
        <div className="product-separator"></div>
        <div className="content-body">
          <HeaderProduct />
          <Products />
        </div>
        <div className="product-footer-separator"></div>
        <div className="content-body">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
