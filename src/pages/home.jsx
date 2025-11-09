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
        <header>
          <Header
            onProfileOpen={() => setShowOverlay(true)}
            onProfileClose={() => setShowOverlay(false)}
          />
        </header>
        {showOverlay && (
          <div
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
            className="position-absolute end-0"
            style={{ top: 100, zIndex: 1050 }} // sesuaikan tinggi navbar
          >
            <div className="card me-5" style={{ width: "25rem" }}>
              <div className="card-body">
                <div className="d-flex flex-column">
                  <div className="gap-3 d-flex w-100 ps-3 py-2 justify-content-start shadow-sm rounded-2">
                    <img
                      src="/images/users/default-profile.jpg"
                      alt="user-profile"
                      style={{ width: 35, height: 35, borderRadius: "50%" }}
                    />
                    <span className="align-self-center">Ardiyan Agus</span>
                  </div>
                  <div className="row d-flex">
                    <div className="col-md-7">
                      <div className="row mt-3">
                        <div className="px-3 profile-info border-profile-info">
                          <div className="justify-content-between d-flex profile-info">
                            <img
                              src="/images/users/member-plus.image"
                              alt="user-profile"
                              style={{ width: 55, height: 20 }}
                            />
                            <a href="#" className="text-link-primary">
                              Langganan
                            </a>
                          </div>
                          <span
                            className="font-weight-bold"
                            style={{ fontSize: "12px", fontWeight: "bolder" }}
                          >
                            Nikmati Gratis Ongkir Tanpa Batas
                          </span>
                          <p style={{ fontSize: "10px" }}>
                            Min. belanja Rp0, bebas biaya aplikasi
                          </p>
                        </div>
                      </div>
                      <div className="row profile-info border-profile-info py-2">
                        <div className="d-flex justify-content-between">
                          <div>
                            <img
                              src="/images/users/gopay.image"
                              alt="user-profile"
                              className="image-payment"
                            />
                            <span className="ms-1 align-self-center">
                              Gopay
                            </span>
                          </div>
                          <a
                            href=""
                            className="text-link-primary align-self-center"
                          >
                            Aktifkan
                          </a>
                        </div>
                      </div>
                      <div className="row profile-info border-profile-info py-2">
                        <div className="d-flex justify-content-between">
                          <div>
                            <img
                              src="/images/users/tokped-card.png"
                              alt="user-profile"
                              className="image-payment"
                            />
                            <span className="ms-1 align-self-center">
                              Tokopedia Card
                            </span>
                          </div>
                          <a
                            href=""
                            className="text-link-primary align-self-center"
                          >
                            Daftar
                          </a>
                        </div>
                      </div>
                      <div className="row profile-info border-profile-info py-2">
                        <div className="d-flex justify-content-between">
                          <div>
                            <img
                              src="/images/users/saldo.svg"
                              alt="user-profile"
                              className="image-payment"
                            />
                            <span className="ms-1 align-self-center">
                              Saldo
                            </span>
                          </div>
                          <span className="align-self-center">Rp. 0</span>
                        </div>
                      </div>
                      <div className="border-profile-promo row pb-3">
                        <div className="d-flex justify-content-between mt-3">
                          <span>Tokopedia Seru</span>
                          <span>Lihat</span>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <span>Misi Seru</span>
                          <span>0</span>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <span>Kupon Saya</span>
                          <span>Cek</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="d-flex mt-3 flex-column justify-content-between">
                        <div>
                          <p>Pembelian</p>
                          <p>Whislist</p>
                          <p>Toko Favorit</p>
                          <p>Pengaturan</p>
                        </div>
                        <div className="d-flex gap-2">
                          <p>Keluar</p>
                          <img
                            className="mt-1"
                            src="/images/general/logout.svg"
                            alt="user-profile"
                            style={{ width: 20, height: 20 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
