import React from "react";
import { TiHeartOutline } from "react-icons/ti";
import { productImage } from "../assets";
import "../style/product.css";

const ProductCard = ({ image, price }) => {
  return (
    <div className="product-container">
      <div className="image-container">
        <img src={image} alt="" className="image" />
        <p className="return">Not Returnable</p>
        <span className="product-icon">
          <TiHeartOutline color="" size={20} />
        </span>
      </div>
      <div className="desc-container">
        <p className="label">shipped from abroad</p>
        <p className="desc">
          Big Bull Premium Parboiled Rice Big Bull rice is a premium quality non
          sticky parboiled rice that is naturally high in
        </p>
        <div className="price-con">
          <p className="discount-price">{price}</p>
          <p className="price-percent">
            <span className="price">
              <del>#170,000</del>
            </span>
            <span className="percent-text">-40%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
