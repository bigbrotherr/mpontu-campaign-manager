import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import Dashboard from "./screens/Dashboard";
import RegisterLogin from "./screens/RegisterLogin";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={RegisterLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
