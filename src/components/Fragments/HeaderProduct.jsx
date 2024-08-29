import "../../styles/components/fragments/headerproduct.css";

const HeaderProduct = () => {
  return (
        <div className="d-flex justify-content-between" style={{ paddingBottom: '1500 0px', marginBottom: '11px' }}>
            <div className="p-2 rounded card-header-product" style={{height: '80px', backgroundImage: 'url(/images/products/header1.jpg)', backgroundSize: 'cover' }}>
                <span className="text-white" style={{ fontWeight: 'bold' }}>For You</span>
            </div>
            <div className="p-2 rounded card-header-product" style={{height: '80px', backgroundImage: 'url(/images/products/header2.jpg)', backgroundSize: 'cover' }}>
                <span className="text-white" style={{ fontWeight: 'bold' }}>Perawatan Kulit</span>
            </div>
            <div className="p-2 rounded card-header-product" style={{height: '80px', backgroundImage: 'url(/images/products/header3.jpg)', backgroundSize: 'cover' }}>
                <span className="text-white" style={{ fontWeight: 'bold' }}>Vitamin & Suplemen</span>
            </div>
            <div className="p-2 rounded card-header-product" style={{height: '80px', backgroundImage: 'url(/images/products/header1.jpg)', backgroundSize: 'cover' }}>
                <span className="text-white" style={{ fontWeight: 'bold' }}>Baju Renang Muslim</span>
            </div>
            <div className="p-2 rounded card-header-product" style={{height: '80px', backgroundImage: 'url(/images/products/header4.jpg)', backgroundSize: 'cover' }}>
                <span className="text-white" style={{ fontWeight: 'bold' }}>Mirip yang kamu cek</span>
            </div>
        </div>
    )
};

export default HeaderProduct;
