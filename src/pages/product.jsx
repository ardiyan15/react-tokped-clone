import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Layouts/Navbar";
import Header from "../components/Fragments/Header";
import { setIsScroll } from "../redux/slices/focusedSlice";


const Product = () => {
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
    </>
  );
};

export default Product;
