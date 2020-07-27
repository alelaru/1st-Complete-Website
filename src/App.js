import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage-component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header-component";
import SignInUpPage from "./pages/signin-signup/signin-and-signup-component";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/sign" component={SignInUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
