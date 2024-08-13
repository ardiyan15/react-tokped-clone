import Card from "react-bootstrap/Card";
import { Icon } from "../Elements/Icon/Icon";
import { products } from "../../data/products/products.json";
import { useEffect, useState } from "react";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(products);
  }, []);

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
          <Card key={index} style={{ width: "13rem" }} className="shadow">
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
      </div>
    </>
  );
};

export default Products;
