import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import PropTypes from "prop-types";

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  onlogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <button
        onClick={this.onlogout}
        className="px-3 py-2 bg-gray-700 text-white font-semibold focus:outline-none"
      >
        {" "}
        Log out
      </button>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Logout);
