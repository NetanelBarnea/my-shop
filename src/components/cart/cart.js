import React from "react";
import "./cart.css";
// import Header from "../header/header";
import Product from "../product/product";
function Cart(props) {
  return (
    <div className="cart">
      {props.productsList.map((product, index) => (
        <Product
          id={product.id}
          key={product.id}
          name={product.title}
          unitsInStock={product.quantity}
          picture={product.image}
          mode="cartmode"
          onProductSub={() => props.onProductSub(product, index)}
          onProductAdd={() => props.onProductAdd(product, index)}
        />
      ))}
    </div>
  );
}
export default Cart;
