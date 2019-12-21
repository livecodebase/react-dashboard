import React from "react";
import "./styles/main.css";
import AppHeader from "./components/navigation/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./pages/index";
import about from "./pages/about";
import login from "./pages/login";

function App() {
  return (
    <Router>
      <div>
        <AppHeader />
        <div id="maincnt" className="mainCont transition-small ">
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/about" exact component={about} />
            <Route path="/login" exact component={login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
