import React from "react";
import "./products.css";
import Product from "../product/product";

const Products = (props) => {
  // const [counter, setCounter] = useState(0);
  return (
    <div className="products">
      products
      <div>
        {props.productsList.map((product, index) => (
          <Product
            id={product.id}
            key={product.id}
            name={product.title}
            unitsInStock={product.quantity}
            picture={product.image}
            mode="shopmode"
            onProductMove={() =>
              props.onProductSelect(
                product.id,
                product.title,
                product.quantity,
                product.image
              )
            }
          />
        ))}
      </div>
    </div>
  );
};
export default Products;
