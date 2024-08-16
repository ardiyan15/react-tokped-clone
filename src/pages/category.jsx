import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Layouts/Navbar";
import Header from "../components/Fragments/Header";
import DetailCategory from "../components/Fragments/DetailCategory";
import Footer from "../components/Fragments/Footer";
import { setIsScroll } from "../redux/slices/focusedSlice";

const Category = () => {
  const isScroll = useSelector((state) => state.focused.isScroll);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      dispatch(setIsScroll(window.scrollY));
    });
  }, [isScroll]);

  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <>
      <div className={isScroll > 0 ? "fixed-top shadow" : ""}>
        <Navbar />
        <Header />
      </div>

      <div className="content-body pb-5">
        <div className="d-flex">
          <h3>Direktodi Menurut</h3>
          <div
            style={{
              border: "1px solid #dee2e6",
              marginLeft: "10px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <span style={{ fontSize: "18px" }}>Kategori</span>
          </div>
        </div>
        <div
          style={{ marginLeft: "4%" }}
          className="d-flex justify-content-between w-75"
        >
          {alphabets.map((alphabet, index) => (
            <span key={index}>{alphabet}</span>
          ))}
        </div>
        <DetailCategory />
      </div>

      <hr className="hr w-100"/>


      <div className="content-body">
        <Footer />
      </div>
    </>
  );
};

export default Category;
