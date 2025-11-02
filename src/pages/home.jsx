import { useEffect, useState } from "react";
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
import ModalLogin from "../components/Fragments/ModalLogin";
import Overlay from "../components/Elements/Overlay";

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const isScroll = useSelector((state) => state.focused.isScroll);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      dispatch(setIsScroll(window.scrollY));
    });
  }, [dispatch]);

  return (
    <>
      {showOverlay && <Overlay />}
      <div className={`site-header ${isScroll > 0 ? "fixed-top shadow" : ""}`}>
        <Navbar />
        <Header
          onProfileOpen={() => setShowOverlay(true)}
          onProfileClose={() => setShowOverlay(false)}
        />
        {/* {showOverlay && ( */}
          <div
            className="d-flex justify-content-end"
            style={{ marginTop: "-4.5em" }}
          >
            <div className="card me-5" style={{ width: "20rem" }}>
              <div className="card-body">
                <div className="d-flex flex-column">
                  <div className="gap-3 d-flex w-100 px-5 py-2 justify-content-start shadow rounded-2">
                    <img
                      src="/images/users/default-profile.jpg"
                      alt="user-profile"
                      style={{ width: 35, height: 35, borderRadius: "50%" }}
                    />
                    <span className="align-self-center">Ardiyan</span>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="justify-content-between d-flex">
                        <span>PLUS</span>
                        <a href="#" className="text-link-primary">Langganan</a>
                      </div>
                      <span className="font-weight-bold">Nikmati Gratis Ongkir Tanpa Batas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* )} */}
      </div>
      <div className="content-body">
        <Banner />
        <CardCategory />
        <Promo />
        <Trend />
        <ModalLogin />
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
