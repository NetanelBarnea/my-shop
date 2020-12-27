import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "../header/header";
import Home from "../../pages/home/Home";
import ProductPage from "../../pages/productPage/ProductPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id">
            <ProductPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
