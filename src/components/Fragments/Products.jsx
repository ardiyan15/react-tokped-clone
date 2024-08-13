import Card from "react-bootstrap/Card";
import { Icon } from "../Elements/Icon/Icon";
import Button from "../Elements/Button/Index";

import { products } from "../../data/products/products.json";
import { promos } from "../../data/promo/promos.json";

const Products = () => {
  const currencyFormatter = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  };

  return (
    <>
      <div
        style={{ paddingBottom: "1500px" }}
        className="d-flex justify-content-between flex-wrap"
      >
        {products.map((product, index) => (
          <Card
            key={index}
            style={{ width: "13rem" }}
            className="shadow-sm mt-4"
          >
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Text>
                <span>{product.title}</span>
                <h5>{currencyFormatter(product.price)}</h5>
                <span style={{ color: "#AAB4C8" }}>
                  <del>{currencyFormatter(product.price)}</del>
                </span>
                <span
                  style={{
                    marginLeft: "10px",
                    color: "#F94D63",
                    fontWeight: "bold",
                  }}
                >
                  {product.discount}%
                </span>
              </Card.Text>
              <div className="d-flex">
                <img
                  src="/images/official_store.png"
                  alt="official_store"
                  style={{ width: "20px" }}
                />
                <div
                  className="d-flex flex-column"
                  style={{
                    marginTop: "-3px",
                    height: "20px",
                    overflowY: "hidden",
                  }}
                >
                  <span>{product.store}</span>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div>
                <span className="d-flex align-items-baseline mt-2">
                  <Icon
                    className="align-self-center"
                    iconName="StarFill"
                    size={15}
                    color="gold"
                  />
                  <span style={{ marginLeft: "5px" }}>{product.rating}</span>
                  <span style={{ marginLeft: "5px", marginRight: "5px" }}>
                    |
                  </span>
                  <span>{product.sold}+ terjual</span>
                </span>
              </div>
            </Card.Body>
          </Card>
        ))}
        <div className="w-100 d-flex justify-content-center">
          <Button
            classname="btn btn-secondary btn-login mt-5"
            customStyle={{
              width: "250px",
              height: "40px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Muat Lebih Banyak
          </Button>
        </div>
        <div className="d-flex flex-column w-100">
          <h3>Cari Semua di Tokopedia!</h3>
          <ul
            className="list-inline d-flex justify-content-between"
            style={{
              borderBottom: "1px solid #dee2e6",
              height: "50px",
              lineHeight: "45px",
              fontWeight: "600",
            }}
          >
            <li
              style={{
                fontWeight: "bold",
                color: "#00AA5B",
                borderBottom: "3px solid #00AA5B",
              }}
            >
              Promo
            </li>
            <li>Tiket Pesawat</li>
            <li>Tiket Kereta</li>
            <li>Hotel</li>
            <li>Kartu Prakerja</li>
            <li>Food & Voucher</li>
            <li>Produk Digital</li>
            <li>Fintech</li>
            <li>Tokopedia Salam</li>
          </ul>
          <div
            className="d-flex justify-content-between flex-wrap w-100"
          >
            {promos.map((subPromo) => (
              <div
                key={subPromo.id}
                className="w-100 d-flex justify-content-between border-bottom p-2"
                style={{ borderBottomColor: "#dee2e6" }}
              >
                {subPromo.map((promo) => (
                  <span key={promo.id} className="w-100 flex-grow-0">
                    {promo.description}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex flex-column">
            <h4
              className="mt-5"
              style={{ color: "#FFA617", fontWeight: "600" }}
            >
              Punya Toko Online? Buka cabangnya di Tokopedia
            </h4>
            <p className="mt-3">
              Mudah, nyaman dan bebas Biaya Layanan Transaksi. <b>GRATIS!</b>
            </p>
            <div className="d-flex">
              <Button
                classname="btn btn-primary"
                customStyle={{
                  width: "200px",
                  height: "50px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Buka Toko Gratis
              </Button>
              <p className="mt-4" style={{ color: "#00AA5B", marginLeft: '10px', fontWeight: 'bold' }}>Pelajari lebih lanjut</p>
            </div>
          </div>
          <div className="mt-5">
            <img src="/images/footer/footer1.jpg" alt="test" style={{ width: '500px', height: '150px' }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
