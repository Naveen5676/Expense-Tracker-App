import "./App.css";
import { Fragment } from "react";
import Signuppage from "./Components/Pages/Signuppage";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./Components/UI/Header";
import Profilepage from "./Components/Pages/Profilepage";
import DailyExpenses from "./Components/Pages/DailyExpenses";
import Forgotpassword from "./Components/Pages/Forgotpassword";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Signuppage />
        </Route>
        <Route path="/home">
          <DailyExpenses />
        </Route>
        <Route path="/profile">
          <Profilepage />
        </Route>
        <Route path="/forgotpwd">
          <Forgotpassword />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
