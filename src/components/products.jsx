import { useEffect, useState } from "react";

function Product() {
    const [product, setproducts] = useState([])
    const [category, setcategory] = useState(1)
  const myStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
    };
    const fetchData = async () => {
        const res = await fetch("http://dummyjson.com/products")
        const product = await res.json()
        setproducts(product.Products)
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div style={myStyle} className="">
      {Products.map((item, i) => {
        return (
          <ProductCard image={item.images[0]} price={item.price} key={i} />
        );
      })}
      ;
    </div>
  );
}

export default Product
