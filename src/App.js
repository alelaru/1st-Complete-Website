import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage-component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header-component";
import SignInUpPage from "./pages/signin-signup/signin-and-signup-component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
  unsubscribeFromAuth = null;
  // Check if the current user is logged in
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchTheProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchTheProps)(App);
