import React from "react";

import "./signin-sign-up.styles.scss";
import SignIn from "../../components/signin/signin-component";
import Signup from "../../components/signup/signup-component";

const SignInUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn></SignIn>
    <Signup></Signup>
  </div>
);

export default SignInUpPage;
