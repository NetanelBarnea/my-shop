import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import {productList} from
const ProductPage = () => {
  // state to hold product data
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://handsomely-maze-stoat.glitch.me/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, []);
  //use efect to get product data with the id

  //const product = productList.find((product) => product.id === +id);
  return (
    <div>
      {/* <div>id: {product.id}</div> */}
      {/* key={product.id} */}
      <h1>{product.title}</h1>
      <img src={product.image}></img>
      <div>{product.description}</div>
    </div>
  );
};

export default ProductPage;
