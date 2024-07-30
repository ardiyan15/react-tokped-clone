import Card from "react-bootstrap/Card";

const CardCategory = () => {
  return (
    <div className="w-100 mt-4">
      <Card className="shadow">
        <Card.Body>
          <div className="row">
            <div className="col-md-6">
              <Card.Title>
                <h4 className="font-weight-bold">Kategori Pilihan</h4>
                <div className="d-flex justify-content-between" style={{ zIndex: '-10' }}>
                  <div style={{ border: "1px solid black", borderRadius: '15px' }}>
                    <img src="/images/product1.webp" alt="" style={{ borderRadius: "inherit" }}/>
                  </div>
                  <div style={{ border: "1px solid black", borderRadius: '15px' }}>
                    <img src="/images/product1.webp" alt="" style={{ borderRadius: "inherit" }}/>
                  </div>
                  <div style={{ border: "1px solid black", borderRadius: '15px' }}>
                    <img src="/images/product1.webp" alt="" style={{ borderRadius: "inherit" }}/>
                  </div>
                  <div style={{ border: "1px solid black", borderRadius: '15px' }}>
                    <img src="/images/product1.webp" alt="" style={{ borderRadius: "inherit" }}/>
                  </div>
                  <div style={{ border: "1px solid black", borderRadius: '15px' }}>
                    <img src="/images/product1.webp" alt="" style={{ borderRadius: "inherit" }}/>
                  </div>
                  <div style={{ border: "1px solid black", borderRadius: '15px' }}>
                    <img src="/images/product1.webp" alt="" style={{ borderRadius: "inherit" }}/>
                  </div>
                </div>
              </Card.Title>
            </div>
            <div className="col-md-6">
              <Card.Title>
                <h4 className="font-weight-bold">Top Up & Tagihan</h4>
                <div className="d-flex justify-content-center">
                <h1>asdds</h1>
                </div>
              </Card.Title>
            </div>
          </div>
          <Card.Text>
            test
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCategory;
