import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Promo = () => {
  return (
    <>
      <div style={{ paddingBottom: '150px' }}>
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
            <div style={{ width: "25%", height: '500px', backgroundColor: 'rgb(188, 176, 254)', borderRadius: '30px' }}>
                <img src="/images/promo1.webp" alt="promo" style={{ height: '100%', paddingLeft: '30px' }} />
            </div>
            <Card className='d-flex align-self-center' style={{ width: '18rem', height: '400px', marginLeft: '-150px', zIndex: '99', borderRadius: '10px', padding: '2px' }}>
                <Card.Img variant="top" src="/images/promo2.jpg" style={{ height: '200px' }}/>
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>Rp99.999</Card.Title>
                    <Card.Text>
                        <span style={{ color: "#AAB4C8" }}><del>Rp99.999</del></span>
                        <span style={{ marginLeft: '10px', color: "#F94D63", fontWeight: 'bold'}}>99%</span>
                    </Card.Text>
                    <p style={{ backgroundColor: '#f71135', height: '5px', borderColor: '#f71135' }}/>
                </Card.Body>
            </Card>
        </div>
      </div>
    </>
  );
};

export default Promo;
