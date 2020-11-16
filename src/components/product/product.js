import React from "react";
import { PRODUCT_MODES } from "../../utils/constants";
import "./product.css";


export default function Product(props) {
  return (
    <div className="product">
      name:{props.name}
      <img className="image" src={props.picture} alt="" />
      <div className="stock">in stock:{props.unitsInStock}</div>
      { <button className="button" onClick={props.onProductMove}>
        add to cart
      </button>}
      {/* {props.productMode === MODES.ON_CART && <button>-</button>} */}
    </div>
  );
}
