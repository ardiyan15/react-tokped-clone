import Card from "react-bootstrap/Card";
import { Icon } from "../Elements/Icon/Icon";
import Button from "../Elements/Button/Index";

import "../../styles/components/fragments/product.css";

import { products } from "../../data/products/products.json";
import itemCategoryProduct from "../../data/promo/promos.json";
import { useState } from "react";
import { motion } from "framer-motion";

const Products = () => {
  const tabProductCategory = [
    {
      id: 1,
      name: "Promo",
      code: "promos",
    },
    {
      id: 2,
      name: "Tiket Pesawat",
      code: "flight_tickets",
    },
    {
      id: 3,
      name: "Tiket Kereta",
      code: "lorem1",
    },
    {
      id: 4,
      name: "Hotel",
      code: "lorem1",
    },
    {
      id: 5,
      name: "Kartu Prakerja",
      code: "lorem1",
    },
    {
      id: 6,
      name: "Food & Voucher",
      code: "lorem1",
    },
    {
      id: 7,
      name: "Product Digital",
      code: "lorem1",
    },
    {
      id: 8,
      name: "Fintech",
      code: "lorem1",
    },
    {
      id: 9,
      name: "Tokopedia Salam",
      code: "lorem1",
    },
  ];

  const [isActive, setIsActive] = useState("Promo");
  const [itemTabCategory, setItemTabCategory] = useState(itemCategoryProduct['promos']);
  const currencyFormatter = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  };

  const handlingProductNavigator = (e, nameSection, codeItem) => {
    e.preventDefault();
    setIsActive(nameSection);
    setItemTabCategory(itemCategoryProduct[codeItem]);
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap">
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
                <span>{currencyFormatter(product.price)}</span>
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
            {tabProductCategory.map((item) => (
              <li
                key={item.id}
              >
                <a className={isActive === item.name ? "active" : ""} href="" onClick={(e) =>
                  handlingProductNavigator(e, item.name, item.code)
                }>
                  {item.name}
                </a>
                {isActive === item.name && (
                  <motion.div layoutId="indicator" className="active-li" />
                )}
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between flex-wrap w-100">
            {itemTabCategory.map((subPromo, subPromoIndex) => (
              <div
                key={subPromoIndex}
                className="w-100 d-flex justify-content-between border-bottom p-2"
                style={{ borderBottomColor: "#dee2e6" }}
              >
                {subPromo.map((promo, index) => (
                  <span key={index} className="w-100 flex-grow-0">
                    {promo.description}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div
          className="d-flex justify-content-between w-100"
          style={{ marginBottom: "40px" }}
        >
          <div className="d-flex flex-column">
            <h4
              className="mt-5"
              style={{ color: "#FFA617", fontWeight: "600" }}
            >
              Punya Toko Online? Buka cabangnya di Tokopedia
            </h4>
            <p className="mt-3" style={{ marginBottom: "30px" }}>
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
              <p
                className="mt-4"
                style={{
                  color: "#00AA5B",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                Pelajari lebih lanjut
              </p>
            </div>
          </div>
          <div className="mt-5">
            <img
              src="/images/footer/footer1.jpg"
              alt="test"
              style={{ width: "500px", height: "150px" }}
            />
          </div>
        </div>
        <hr className="w-100" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum
          exercitationem iste adipisci amet est, dolorem minus esse dicta magni
          aliquam animi eaque tenetur doloribus praesentium eos rerum omnis odit
          deleniti unde iure. Facilis necessitatibus illo veniam deleniti atque
          fuga repellendus sint ex ea mollitia. Illo dolorem odit optio.
          Deleniti esse nam velit eos repellendus, itaque iste id alias
          voluptates sapiente et necessitatibus ab nisi quos fugit! Minus et
          omnis nostrum asperiores harum dolor maxime iste ex dignissimos
          veritatis iusto, labore facilis aliquam dolorem ipsam totam expedita
          quaerat magnam deleniti necessitatibus incidunt dicta eum deserunt
          quasi! Neque mollitia aspernatur similique nihil tenetur debitis
          perspiciatis quisquam veniam, nostrum eos! Consectetur nostrum dolor
          accusamus aut sequi, praesentium animi fugit libero necessitatibus
          cumque earum exercitationem delectus illum tenetur, deleniti vitae,
          veritatis voluptas magni. Labore facere nostrum deserunt sint minus
          repellat assumenda pariatur alias eos, laudantium repudiandae quam
          aliquid rerum fugit, ad ut iusto? Quam magnam culpa architecto nihil
          sequi, adipisci dolor doloribus fugit nesciunt illo modi. Eos
          veritatis, suscipit repellat adipisci voluptas maiores quos! Dolorum
          ab enim optio similique! Esse sit, recusandae odit consectetur aliquid
          labore quod minus rerum enim quas officia repudiandae ipsum, iure
          vero? Voluptatem molestiae consequatur quod rerum iure, quos dicta
          nihil enim laudantium, ut quis eaque! Voluptas, accusamus id ullam
          eaque nisi sapiente fugiat eius iure perspiciatis unde! Doloribus
          iusto natus omnis non labore? Aut, et. Illum dolor quod maxime vel
          vero accusamus veniam minus sint. Vero qui, ipsum nulla earum laborum
          minus, ab dolore optio explicabo molestiae possimus voluptatem aperiam
          deleniti necessitatibus modi ad nisi consectetur quos quas ea? Aut
          quidem at deleniti similique harum labore! Illum fuga incidunt optio,
          beatae veritatis consequatur necessitatibus officia ducimus aliquam
          sed iure, commodi numquam! Perspiciatis reiciendis temporibus ad
          molestias vero delectus culpa tempore obcaecati vel eligendi odio
          labore illum totam laudantium excepturi eaque corporis, sunt
          consequatur debitis doloribus quidem deleniti aperiam. Optio
          distinctio quae voluptates pariatur voluptate ratione deserunt itaque
          nostrum quod expedita quo ducimus, sit quaerat ut aliquid rem
          similique quisquam, enim excepturi officia? Exercitationem dignissimos
          eum illo laboriosam asperiores totam minus nisi aliquam cum natus
          placeat maiores, architecto fugiat accusamus blanditiis reiciendis
          consequatur facere quos cupiditate esse, iure nulla! Eaque aliquid
          perspiciatis deserunt possimus voluptates dolore, at officiis quaerat
          exercitationem reiciendis ipsa eius voluptate, consequuntur officia.
          Dolorem a odit, ipsa minus ipsum, iusto nam deserunt porro dolores
          ducimus perferendis delectus. Perspiciatis molestiae maxime dolore
          necessitatibus eum illo dolor temporibus tenetur. Amet beatae
          obcaecati architecto dolorum, quia dignissimos reiciendis veritatis
          voluptate exercitationem in vel autem dolore fugiat minima aspernatur
          delectus itaque ducimus provident? Quos placeat expedita nulla nobis
          commodi sint ipsum delectus distinctio alias excepturi, modi ratione
          quae, a ab esse, beatae maiores sed perferendis. Quo provident
          reiciendis ipsum, maiores nostrum accusamus incidunt voluptates
          corporis, corrupti similique ex cum quis numquam, assumenda ducimus
          veritatis saepe deleniti? Ex repellat consequatur velit corrupti quia
          officia nihil, porro hic at rem ullam, doloremque saepe vel modi
          perspiciatis delectus ipsam ab a inventore ducimus laboriosam autem
          reiciendis, sapiente aliquid! Eum voluptatibus nulla unde ut modi
          repellendus quis eligendi iste vel suscipit possimus ipsum fugiat
          consequatur corrupti expedita rem, et dolorem aspernatur dolorum
          dolore eveniet laudantium debitis illo. Alias perferendis tenetur vero
          nam tempora impedit aperiam neque iusto dignissimos quibusdam
          doloremque blanditiis vel ea voluptatem atque iure, tempore ratione
          nisi laboriosam libero facilis magni asperiores minima temporibus!
          Nemo nostrum commodi eum maiores tenetur, doloribus dolor iusto
          eveniet tempora esse dicta natus ex consectetur dolores, nihil sit
          delectus sed explicabo omnis velit? Dolore alias eos officiis.
          Corrupti quas adipisci, doloribus rerum quaerat facere quod officia
          itaque repudiandae ab optio, magnam possimus minus autem? Officiis
          commodi optio ab vero assumenda ducimus quam, voluptatibus saepe
          dolores asperiores deserunt qui atque doloribus laborum maiores sunt
          voluptate ad adipisci, expedita praesentium repudiandae recusandae
          corporis unde accusamus? Fugiat doloremque debitis aliquid odio
          ratione eos obcaecati nostrum, sapiente quaerat asperiores ipsum
          voluptatem rerum illum odit esse! Laboriosam voluptates beatae minima
          eaque fugit veniam magni molestiae eveniet quibusdam explicabo aliquam
          consectetur dolores voluptas, saepe temporibus cumque quod molestias
          eum architecto, placeat delectus omnis sapiente cum? Repudiandae
          accusantium neque quas maxime molestias reiciendis vitae dolorum vel
          ipsam temporibus dolores alias esse repellat numquam officiis
          consectetur accusamus debitis pariatur provident veritatis a
          reprehenderit, explicabo harum. Ullam quas officiis ea laudantium
          facere, officia unde earum mollitia maiores esse voluptate, cupiditate
          ipsa quaerat doloribus veniam quae iusto eos repudiandae tenetur
          assumenda inventore libero harum maxime modi. Harum error quia,
          aperiam, natus neque distinctio repellat libero blanditiis totam
          tempora ducimus. Sed recusandae iste beatae, aperiam veritatis
          explicabo odit nam, omnis cupiditate quasi odio molestiae. Aspernatur
          obcaecati quam explicabo dignissimos vero nam nemo, reiciendis
          reprehenderit iusto unde similique quasi ex debitis temporibus,
          voluptates illo. Eaque impedit sint esse ipsum deleniti doloribus? Id
          sequi vel delectus rem saepe nulla, neque aspernatur aliquam dolore
          commodi necessitatibus harum deserunt asperiores vitae, quas qui! Sit
          impedit voluptatum aliquid in. Magni consequatur quo dolorum explicabo
          delectus voluptatum optio veritatis enim. Itaque voluptatum quas eius
          quis dolorum sit voluptatem voluptas dolor quaerat molestias, unde
          harum, fuga molestiae numquam aperiam maiores impedit corporis,
          repellendus laborum aliquam porro. Numquam nisi ex, ducimus provident
          harum quasi autem non possimus animi reprehenderit quisquam. Odit
          veritatis sequi reprehenderit ducimus distinctio iusto, ratione
          exercitationem doloremque, voluptates vitae aliquid voluptas id
          dolorem a obcaecati vero, nostrum quos itaque ipsa dicta possimus eius
          pariatur iste asperiores! Corrupti soluta beatae fugit est autem qui
          voluptate aspernatur aperiam iure, quisquam cum! Repudiandae,
          reiciendis cumque numquam itaque vero voluptate voluptates aliquid
          sunt illum suscipit accusamus rem sapiente qui commodi omnis officiis
          quia fugit magnam assumenda amet. Voluptate quod magnam sunt mollitia
          facere expedita dolore inventore repudiandae dolores omnis odit, fuga
          architecto asperiores perferendis esse veritatis minima doloribus
          eius! Aliquam, quasi porro. Exercitationem numquam quae quos, ratione
          sapiente, debitis expedita animi incidunt id ut minima fugiat
          cupiditate, delectus cumque ad laudantium fugit excepturi! Nemo hic
          voluptatibus fuga recusandae dicta enim deleniti odit ratione beatae
          blanditiis harum ab, eius nobis fugit. Rem fuga officiis explicabo
          incidunt! Saepe accusamus illo iure atque sapiente velit, deserunt
          unde sed adipisci assumenda!
        </p>
      </div>
      <div
        className="d-flex w-100 justify-content-between"
        style={{ paddingBottom: "100px" }}
      >
        <div className="d-flex">
          <img
            src="/images/footer/footer2.jpg"
            alt="footer1"
            style={{ width: "150px", height: "150px" }}
          />
          <div
            style={{ marginLeft: "20px", width: "230px" }}
            className="flex-column"
          >
            <h5 style={{ fontWeight: "bold" }} className="mt-3 primary-color">
              Transparan
            </h5>
            <p className="mt-4">
              Pembayaran Anda baru diteruskan ke penjual setelah barang Anda
              terima
            </p>
          </div>
        </div>
        <div className="d-flex">
          <img
            src="/images/footer/footer3.jpg"
            alt="footer3"
            style={{ width: "150px", height: "150px" }}
          />
          <div
            style={{ marginLeft: "20px", width: "230px" }}
            className="flex-column"
          >
            <h5 style={{ fontWeight: "bold" }} className="mt-3 primary-color">
              Aman
            </h5>
            <p className="mt-4">
              Bandingkan review untuk berbagai online shop terpercaya
              se-Indonesia
            </p>
          </div>
        </div>
        <div className="d-flex">
          <img
            src="/images/footer/footer4.jpg"
            alt="footer4"
            style={{ width: "150px", height: "150px" }}
          />
          <div
            style={{ marginLeft: "20px", width: "200px" }}
            className="flex-column"
          >
            <h5 style={{ fontWeight: "bold" }} className="mt-3 primary-color">
              Fasilitas Escrow Gratis
            </h5>
            <p className="mt-3">
              Fasilitas Escrow (Rekening Bersama) Tokopedia tidak dikenakan
              biaya tambahan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
