import Banner from "../components/Fragments/Banner";
import CardCategory from "../components/Fragments/CardCategory";
import Header from "../components/Fragments/Header";
import Navbar from "../components/Layouts/Navbar";
import "../styles/pages/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="content-body">
        <Banner />
        <CardCategory />
      </div>
    </>
  );
};

export default Home;
