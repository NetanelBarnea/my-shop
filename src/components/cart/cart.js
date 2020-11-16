import React from "react";
import "./cart.css";
// import { PRODUCT_MODES } from "../../utils/constants"
// import Header from "../header/header";
import Product from "../product/product";
function Cart(props) {
  return (
    <div className="cart">

    {props.productsList.map((product, index) => (
      <Product
        key={product.id}
        name={product.title}
        unitsInStock={product.quantity}
        picture={product.image}
       
      />
    ))}
  </div>
  );
}
export default Cart;
