import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage-component";
import { Switch, Route } from "react-router-dom";

const Hatspage = () => (
  <div>
    <h1>Holalalala</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/hats" component={Hatspage}></Route>
      </Switch>
    </div>
  );
}

export default App;
