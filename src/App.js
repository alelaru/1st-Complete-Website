import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage-component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header-component";
import SignInUpPage from "./pages/signin-signup/signin-and-signup-component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;
  // Check if the current user is logged in
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/sign" component={SignInUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
