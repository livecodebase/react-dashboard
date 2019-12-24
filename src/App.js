import React, { Component } from "react";

// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Redux
import store from "./store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Authentication
import { loadUser } from "./actions/authActions";

// Navigation
import home from "./pages/index";
import login from "./pages/login";
import signup from "./pages/usersignup";
import users from "./pages/users";
import logout from "./pages/logout";

// Glbal style sheet
import "./styles/main.css";

class App extends Component {
  // Proptypes
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  // Check Authentication status first
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Router>
        {this.props.isAuthenticated ? (
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/users" exact component={users} />
            <Route path="/login" exact component={login} />
            <Route path="/signup" exact component={signup} />
            <Route path="/logout" exact component={logout} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" exact component={login} />
            <Route path="/signup" exact component={signup} />
            <Route path="*" component={RedirectOthers} />
          </Switch>
        )}
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loadUser })(App);

// Redirect 404 page to Login
class RedirectOthers extends Component {
  render() {
    return <Redirect to="/login" />;
  }
}
