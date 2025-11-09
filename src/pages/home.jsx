import { useCallback, useEffect, useRef, useState } from "react";
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
import ProfileOverlay from "../components/Fragments/ProfileOverlay";

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const isScroll = useSelector((state) => state.focused.isScroll);
  const dispatch = useDispatch();
  const headerRef = useRef(null);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      dispatch(setIsScroll(window.scrollY));
    });
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const openOverlay = () => setShowOverlay(true);
  const closeOverlay = () => setShowOverlay(false);

  return (
    <>
      {showOverlay && <Overlay />}
      <div
        ref={headerRef}
        className={`site-header ${isScroll > 0 ? "fixed-top shadow" : ""}`}
        style={{ zIndex: 1060 }}
      >
        <Navbar />
        <header>
          <Header onProfileOpen={openOverlay} onProfileClose={closeOverlay} />
        </header>
        {showOverlay && (
          <ProfileOverlay
            onMouseEnter={openOverlay}
            onMouseLeave={closeOverlay}
            top={100}
            right={24}
          />
        )}
      </div>

      {/* Spacer agar konten tidak ketutup header fixed */}
      <div style={{ height: isScroll > 0 ? 100 : 0 }} />

      <main className="content-body">
        <Banner />
        <CardCategory />
        <Promo />
        <Trend />
        <ModalLogin />
      </main>
      <section>
        <div className="product-separator"></div>
        <div className="content-body">
          <HeaderProduct />
          <Products />
        </div>
        <div className="product-footer-separator"></div>
        <div className="content-body">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
