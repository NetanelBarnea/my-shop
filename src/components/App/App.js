import React, { useState } from "react";
import "./App.css";
import Header from "../header/header";
import Products from "../products/products";
import Demo from "../slider/slider";
import Cart from "../cart/cart";

function App() {
  const [productsList, setProductsList] = useState([]);

  function productSelect(id, title, quantity, image) {
    let tempProducts = [...productsList];

    const productInCart = tempProducts.find((prod) => prod.id===id)
    if (!productInCart) {
      const product = {
        id,
        title,
        quantity: 1,
        image,
      };
      // console.log(product);
      // /  אני חייב לשים לב שרק אחרי שהמפ עובר על כל המוצרים הוא מוסיף את המוצר. אם הוא יוסיף אותו בכל שלב של הלולאה יתווספו המון מוצרים כאלה. צריך שיהיה קוונטיטי אחד למצוצר ראשוני כי הו נכנס למערך כמו שהוא.בשאלה איך לדעת אם מוצר כבר נמצא במערך וצריך להגדיל את הכמות שלו או שהוא לא נמצא וצריך לצרף אותו לעגלה כמוצר חדש{
      tempProducts.push(product);
        // console.log(tempProducts);
    } else {
      productInCart.quantity++;
    }

    setProductsList(tempProducts);

  }

  // } )
  //     if (cheker === true) {tempProducts.push(product)}
  // //     cheker === false &&
  //     console.log(tempProducts);

  //     cheker = true;

  //     tempProducts.map((oneProduct, index) => {
  //       if (oneProduct.key === product.key) {
  //         tempProducts[index].quantity += 1;
  //       } else {
  //         tempProducts.push(product);
  //       }
  // return oneProduct
  //     });

  //     setProducts([...tempProducts]);
  //   }
  // }

  // useEffect(()=>
  //   [Products]
  // );
  return (
    <div className="App">
      <div>
        App
        <Demo />
        <Header />
        <Cart productsList={productsList}/>
        <Products
          onProductSelect={(id, title, quantity, image) =>
            productSelect(id, title, quantity, image)
          }
        />
      </div>
    </div>
  );
}

export default App;
