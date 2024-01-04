import React, { useEffect } from "react";
import Header from "../../../components/Header";
import "../../../assets/css/productView.css";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer";

const ProductsView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  useEffect(() => {
    window.scrollTo(0, 0);

    if (product === undefined) {
      navigate("/our-store");
    }
  }, []);

  const backgroundImageUrl = product?.imageSrc;
  return (
    <>
      <Header />

      <main className="productView-container">
        <h1 className="productView-title">{product?.description}</h1>
        <p className="productView-price">{product?.price}</p>
        <div
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "100%",
          }}
        ></div>
        <section className="productView-body">
          <div>
            <h2 className="productView-body-title">
              {product?.productDescTitle}
            </h2>
            <div className="productView-body-text">
              {product?.productDescText.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className="productView-body-list">
              {product?.productDescList.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div>
              <a
                href={product?.webLink}
                target="_blank"
                rel="noreferrer"
                className="product-webLink"
              >
                {product?.webLink}
              </a>
            </div>
            <button className="productView-btn"> Click To Pay</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductsView;
