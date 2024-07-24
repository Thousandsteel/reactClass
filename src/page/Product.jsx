import React from "react";
import ProductCard from "../components/Product.Card";
import data, { products } from "../data/product";

function Product() {
  const myStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
  };
  return (
    <div style={myStyle} className="">
      {products.map((item, i) => {
        return (
          <ProductCard image={item.images[0]} price={item.price} key={i} />
        );
      })}
      ;
    </div>
  );
}

export default Product;
