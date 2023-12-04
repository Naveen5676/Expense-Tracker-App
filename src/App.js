import "./App.css";
import { Fragment } from "react";
import Signuppage from "./Components/Pages/Signuppage";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./Components/UI/Header";
import Profilepage from "./Components/Pages/Profilepage";


function App() {
  return (
    <Fragment>
      <Header/>
      <Switch>
      <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Signuppage />
        </Route>
        <Route path="/home">
          <Header />
        </Route>
        <Route path='/profile'>
          <Profilepage/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
