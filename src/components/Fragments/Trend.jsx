import { Icon } from "../Elements/Icon/Icon";



const Trend = () => {
  return (
    <>
      <div className="mt-5">
        <div className="head-trend d-flex mb-3">
          <h3 style={{ marginRight: '1%' }}>Lagi Trending, nih</h3>
          <span className="d-flex align-items-baseline" style={{ color: '#00AA5B', fontWeight: 'bold' }}>
          <Icon
            className="align-self-center"
            iconName="ArrowClockwise"
            size={25}
          />
          <span className="align-self-center">Muat Lainnya</span>
          </span>
        </div>
        <div>
          <div
            className="d-flex justify-content-between align-content-between flex-wrap"
            style={{ height: "250px" }}
          >
            <div
              style={{ border: "1px solid #dee2e6", width: "300px" }}
              className="shadow-sm d-flex align-items-center p-2 flex-wrap"
            >
              <img
                src="/images/trends/trend1.webp"
                alt="trend1"
                style={{ width: "100px", marginRight: "5%" }}
              />
              <span>
                <span style={{ fontWeight: "bold" }}>Micellar Water</span>
                <br />
                <span>999rb Produk</span>
              </span>
            </div>
            <div
              style={{ border: "1px solid #dee2e6", width: "300px" }}
              className="shadow-sm d-flex align-items-center p-2 flex-wrap"
            >
              <img
                src="/images/trends/trend2.webp"
                alt="trend1"
                style={{ width: "100px", marginRight: "5%" }}
              />
              <span>
                <span style={{ fontWeight: "bold" }}>Micellar Water</span>
                <br />
                <span>999rb Produk</span>
              </span>
            </div>
            <div
              style={{ border: "1px solid #dee2e6", width: "300px" }}
              className="shadow-sm d-flex align-items-center p-2 flex-wrap"
            >
              <img
                src="/images/trends/trend3.webp"
                alt="trend1"
                style={{ width: "100px", marginRight: "5%" }}
              />
              <span>
                <span style={{ fontWeight: "bold" }}>Micellar Water</span>
                <br />
                <span>999rb Produk</span>
              </span>
            </div>
            <div
              style={{ border: "1px solid #dee2e6", width: "300px" }}
              className="shadow-sm d-flex align-items-center p-2 flex-wrap"
            >
              <img
                src="/images/trends/trend4.webp"
                alt="trend1"
                style={{ width: "100px", marginRight: "5%" }}
              />
              <span>
                <span style={{ fontWeight: "bold" }}>Micellar Water</span>
                <br />
                <span>999rb Produk</span>
              </span>
            </div>
            <div
              style={{ border: "1px solid #dee2e6", width: "300px" }}
              className="shadow-sm d-flex align-items-center p-2 flex-wrap"
            >
              <img
                src="/images/trends/trend5.webp"
                alt="trend1"
                style={{ width: "100px", marginRight: "5%" }}
              />
              <span>
                <span style={{ fontWeight: "bold" }}>Micellar Water</span>
                <br />
                <span>999rb Produk</span>
              </span>
            </div>
            <div
              style={{ border: "1px solid #dee2e6", width: "300px" }}
              className="shadow-sm d-flex align-items-center p-2 flex-wrap"
            >
              <img
                src="/images/trends/trend6.webp"
                alt="trend1"
                style={{ width: "100px", marginRight: "5%" }}
              />
              <span>
                <span style={{ fontWeight: "bold" }}>Micellar Water</span>
                <br />
                <span>999rb Produk</span>
              </span>
            </div>
            <div
              style={{ border: "1px solid #dee2e6", width: "300px" }}
              className="shadow-sm d-flex align-items-center p-2 flex-wrap"
            >
              <img
                src="/images/trends/trend7.webp"
                alt="trend1"
                style={{ width: "100px", marginRight: "5%" }}
              />
              <span>
                <span style={{ fontWeight: "bold" }}>Micellar Water</span>
                <br />
                <span>999rb Produk</span>
              </span>
            </div>
            <div
              style={{ border: "1px solid #dee2e6", width: "300px" }}
              className="shadow-sm d-flex align-items-center p-2 flex-wrap"
            >
              <img
                src="/images/trends/trend8.webp"
                alt="trend1"
                style={{ width: "100px", marginRight: "5%" }}
              />
              <span>
                <span style={{ fontWeight: "bold" }}>Micellar Water</span>
                <br />
                <span>999rb Produk</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trend;
