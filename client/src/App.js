import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Nav, Footer } from "./components";
import { Cart, Home, Login, Register } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
