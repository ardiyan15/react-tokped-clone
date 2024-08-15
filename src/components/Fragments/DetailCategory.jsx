import Card from "react-bootstrap/Card";
import { Icon } from "../Elements/Icon/Icon";

const DetailCategory = () => {
  return (
    <>
      <div className="d-flex mt-5">
        <div className="left-section flex-column" style={{ width: '15%' }}>
          <h2>A</h2>
          <span className="primary-color" style={{ fontWeight: 'bold' }}>Audio, Kamera & Elektronik Lainnya</span>
        </div>
        <div className="right-section w-100 shadow">
            <div className="d-flex flex-wrap w-100">
                <p className="text-white" style={{width: '450px', position: 'absolute',  fontWeight: 'bold', fontSize: '30px', marginTop: '60px', paddingLeft: '20px' }}>Audio, Kamera & Elektronik Lainnya</p>
                <img src="/images/category/category1.png" alt="" />
                <p></p>
            </div>
            <div className="container" style={{ marginLeft: '2%' }}>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default DetailCategory;
