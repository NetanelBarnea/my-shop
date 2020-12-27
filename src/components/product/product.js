import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div className="product">
      <Link to={`/${props.id}`}>
        <span>name:{props.name}</span>
        <img className="image" src={props.picture} alt="" />
      </Link>

      <div className="stock">in stock:{props.unitsInStock}</div>
      {props.mode === "shopmode" && (
        <button className="button" onClick={() => props.onProductMove()}>
          add to cart
        </button>
      )}
      {props.mode === "cartmode" && (
        <div>
          <button className="button" onClick={() => props.onProductSub()}>
            -
          </button>
          <button className="button" onClick={() => props.onProductAdd()}>
            +
          </button>
        </div>
      )}
    </div>
  );
}
