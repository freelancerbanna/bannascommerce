import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Nav, Footer } from "./components";
import {
  Cart,
  Home,
  Login,
  ProductList,
  Register,
  SingleProduct,
} from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/:category" component={ProductList} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
