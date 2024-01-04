import React from "react";
import { useNavigate } from "react-router-dom";

const StoreCard = ({
  imageSrc,
  title,
  description,
  price,
  button,
  cartSrc,
  productDescTitle,
  productDescText,
  productDescList,
  webLink,
}) => {
  const navigate = useNavigate();

  return (
    <div className="ourstore-card">
      <img className="ourstore-card-img-big" src={imageSrc} alt="Card" />
      <div className="ourstore-card-content">
        <p>
          <b>{description}</b>
        </p>
        <p>{price}</p>
        <div className="ourstore-button-card">
          <button
            onClick={() => {
              navigate("/product", {
                state: {
                  product: {
                    imageSrc,
                    price,
                    description,
                    productDescTitle,
                    productDescText,
                    productDescList,
                    webLink,
                  },
                },
              });
            }}
            className="ourstore-btn-color"
          >
            {button}
          </button>
          <img src={cartSrc} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
