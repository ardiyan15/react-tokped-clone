import Navbar from "../components/Layouts/Navbar";
import Banner from "../components/Fragments/Banner";
import Header from "../components/Fragments/Header";
import CardCategory from "../components/Fragments/CardCategory";
import Promo from "../components/Fragments/Promo";
import "../styles/pages/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="content-body">
        <Banner />
        <CardCategory />
        <Promo />
      </div>
    </>
  );
};

export default Home;
