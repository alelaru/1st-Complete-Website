import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import SignInUpPage from "./pages/signin-signup/signin-and-signup-component";
import Homepage from "./pages/homepage/homepage-component";
import CheckoutPage from "./pages/checkoutpage/checkout-component";
import Header from "./components/header/header-component";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  // It behaves like ComponentWillMount
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route
          exact
          path="/sign"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInUpPage />)}
        ></Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
