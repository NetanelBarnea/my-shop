import React, { useState, useEffect } from "react";
import "./Home.css";
import Products from "../../components/products/products";
import Cart from "../../components/cart/cart";
import axios from "axios";

function Home() {
  const [productsList, setProductsList] = useState([]);
  const [cartProductList, setCartProductsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://handsomely-maze-stoat.glitch.me/products")
      .then((response) => {
        setProductsList(response.data);
      });
  }, []);

  useEffect(() => {
    const cartStorage = localStorage.getItem("cartStorage");
    if (!cartStorage) return;
    setCartProductsList(JSON.parse(cartStorage));
  }, []);

  function productSelect(id, title, quantity, image) {
    if (quantity === 0) return;
    setProductsList(
      productsList.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
    setCartProductsList((tempProducts) => {
      const productInCart = tempProducts.find((prod) => prod.id === id);
      if (!productInCart) {
        const product = {
          id,
          title,
          quantity: 1,
          image,
        };
        return [...tempProducts, product];
        // console.log(product);
        // /  אני חייב לשים לב שרק אחרי שהמפ עובר על כל המוצרים הוא מוסיף את המוצר. אם הוא יוסיף אותו בכל שלב של הלולאה יתווספו המון מוצרים כאלה. צריך שיהיה קוונטיטי אחד למצוצר ראשוני כי הו נכנס למערך כמו שהוא.בשאלה איך לדעת אם מוצר כבר נמצא במערך וצריך להגדיל את הכמות שלו או שהוא לא נמצא וצריך לצרף אותו לעגלה כמוצר חדש{
      } else {
        return tempProducts.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
    });
  }

  const productSub = (product, index) => {
    setCartProductsList((oldProductsList) => {
      if (product.quantity > 1) {
        return oldProductsList.map((lProduct) =>
          lProduct.id === product.id
            ? { ...lProduct, quantity: lProduct.quantity - 1 }
            : lProduct
        );
      } else {
        return oldProductsList.filter((lProduct) => lProduct.id !== product.id);
      }
    });
    setProductsList(
      productsList.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("cartStorage", JSON.stringify(cartProductList));
  }, [cartProductList]);

  return (
    <div className="Home">
      <div>
        <Cart
          productsList={cartProductList}
          onProductSub={productSub}
          onProductAdd={(product, index) => {
            productSelect(
              product.id,
              product.title,
              product.quantity,
              product.image
            );
          }}
        />
        <Products
          productsList={productsList}
          onProductSelect={(id, title, quantity, image) =>
            productSelect(id, title, quantity, image)
          }
        />
      </div>
    </div>
  );
}

export default Home;
