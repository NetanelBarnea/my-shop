import React, { useState, useEffect } from "react";
import "./products.css";
import Product from "../product/product";
import axios from "axios";
// import { PRODUCT_MODES } from "../../utils/constants";

const Products = (props) => {
  const [counter, setCounter] = useState(0);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://quilt-flax-chemistry.glitch.me/products")
      .then((response) => {
        setProductsList(response.data);
      });
  }, []);

  const productMove = (product, index) => {
    if (product.quantity > 0) {
      let tempProductsList = [...productsList];

      let obj = {
        ...tempProductsList[index],
        quantity: tempProductsList[index].quantity - 1,
      };
      tempProductsList[index] = obj;

      setProductsList(tempProductsList);

      props.onProductSelect(
        product.id,
        product.title,
        product.quantity,
        // -1
        product.image
      );
    }
  };

  return (
    <div className="products">
      products
      <div>
        {productsList.map((product, index) => (
          <Product
            key={product.id}
            name={product.title}
            unitsInStock={product.quantity}
            picture={product.image}
            // productMode={PRODUCT_MODES.ON_SHOP}
            onProductMove={() => {
              productMove(product, index);
              product.quantity > 0 && setCounter(counter + 1);
              // onProductSelect = () => {

              // };
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Products;
