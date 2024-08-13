import Card from 'react-bootstrap/Card';

const Promo = () => {
  return (
    <>
      <div>
        <div className="d-flex w-100 mt-5">
          <h2>Flash Sale</h2>
          <p className="d-flex align-self-baseline" style={{marginTop: '10px', fontSize: '20px', marginLeft: '10px' }}>Berakhir dalam</p>
          <p className="text-white p-2" style={{ fontWeight: 'bold', marginLeft: '10px', backgroundColor: "#F94D63" }}>00</p>
          <p className="d-flex align-self-center" style={{ color: "#F94D63", marginLeft: '10px' }}>:</p>
          <p className="text-white p-2" style={{ fontWeight: 'bold', marginLeft: '10px', backgroundColor: "#F94D63" }}>00</p>
          <p className="d-flex align-self-center" style={{ color: "#F94D63", marginLeft: '10px' }}>:</p>
          <p className="text-white p-2" style={{ fontWeight: 'bold', marginLeft: '10px', backgroundColor: "#F94D63" }}>00</p>
          <p className="text-link-primary d-flex align-self-baseline" style={{ marginLeft: '10px' }}>Lihat Semua</p>
        </div>
        <div className="d-flex">
            <div style={{ width: "35%", height: '400px', backgroundColor: 'rgb(188, 176, 254)', borderRadius: '30px' }}>
                <img src="/images/promo1.webp" alt="promo" style={{ width: '50%', height: '100%', paddingLeft: '30px' }} />
            </div>
            <div className='d-flex justify-content-between w-100'>
            <Card className='d-flex align-self-center' style={{ width: '13rem', height: '350px', marginLeft: '-150px', zIndex: '99', borderRadius: '10px', padding: '2px' }}>
                <Card.Img variant="top" src="/images/promo2.jpg" style={{ height: '200px' }}/>
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>Rp99.999</Card.Title>
                    <Card.Text>
                        <span style={{ color: "#AAB4C8" }}><del>Rp99.999</del></span>
                        <span style={{ marginLeft: '10px', color: "#F94D63", fontWeight: 'bold'}}>99%</span>
                    </Card.Text>
                    <p style={{ backgroundColor: '#f71135', height: '5px', borderColor: '#f71135' }}/>
                    <p style={{ fontSize: '12px', marginTop: '-10px' }}>Segera Habis</p>
                </Card.Body>
            </Card>
            <Card className='d-flex align-self-center' style={{ width: '13rem', height: '350px', zIndex: '99', borderRadius: '10px', padding: '2px' }}>
                <Card.Img variant="top" src="/images/promo3.jpg" style={{ height: '200px' }}/>
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>Rp99.999</Card.Title>
                    <Card.Text>
                        <span style={{ color: "#AAB4C8" }}><del>Rp99.999</del></span>
                        <span style={{ marginLeft: '10px', color: "#F94D63", fontWeight: 'bold'}}>99%</span>
                    </Card.Text>
                    <p style={{ backgroundColor: '#f71135', height: '5px', borderColor: '#f71135' }}/>
                    <p style={{ fontSize: '12px', marginTop: '-10px' }}>Segera Habis</p>
                </Card.Body>
            </Card>
            <Card className='d-flex align-self-center' style={{ width: '13rem', height: '350px', zIndex: '99', borderRadius: '10px', padding: '2px' }}>
                <Card.Img variant="top" src="/images/promo4.jpg" style={{ height: '200px' }}/>
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>Rp99.999</Card.Title>
                    <Card.Text>
                        <span style={{ color: "#AAB4C8" }}><del>Rp99.999</del></span>
                        <span style={{ marginLeft: '10px', color: "#F94D63", fontWeight: 'bold'}}>99%</span>
                    </Card.Text>
                    <p style={{ backgroundColor: '#f71135', height: '5px', borderColor: '#f71135' }}/>
                    <p style={{ fontSize: '12px', marginTop: '-10px' }}>Segera Habis</p>
                </Card.Body>
            </Card>
            <Card className='d-flex align-self-center' style={{ width: '13rem', height: '350px', zIndex: '99', borderRadius: '10px', padding: '2px' }}>
                <Card.Img variant="top" src="/images/promo5.png" style={{ height: '200px' }}/>
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>Rp99.999</Card.Title>
                    <Card.Text>
                        <span style={{ color: "#AAB4C8" }}><del>Rp99.999</del></span>
                        <span style={{ marginLeft: '10px', color: "#F94D63", fontWeight: 'bold'}}>99%</span>
                    </Card.Text>
                    <p style={{ backgroundColor: '#f71135', height: '5px', borderColor: '#f71135' }}/>
                    <p style={{ fontSize: '12px', marginTop: '-10px' }}>Segera Habis</p>
                </Card.Body>
            </Card>
            <Card className='d-flex align-self-center' style={{ width: '13rem', height: '350px', zIndex: '99', borderRadius: '10px', padding: '2px' }}>
                <Card.Img variant="top" src="/images/promo6.jpg" style={{ height: '200px' }}/>
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>Rp99.999</Card.Title>
                    <Card.Text>
                        <span style={{ color: "#AAB4C8" }}><del>Rp99.999</del></span>
                        <span style={{ marginLeft: '10px', color: "#F94D63", fontWeight: 'bold'}}>99%</span>
                    </Card.Text>
                    <p style={{ backgroundColor: '#f71135', height: '5px', borderColor: '#f71135' }}/>
                    <p style={{ fontSize: '12px', marginTop: '-10px' }}>Segera Habis</p>
                </Card.Body>
            </Card>
            </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
