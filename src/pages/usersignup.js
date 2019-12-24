import React, { Component } from "react";
import "../styles/login.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { register } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";

class usersignup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, redirect to homepage
    if (isAuthenticated === true) {
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value === "") {
      e.target.classList.remove("filled");
    } else {
      e.target.classList.add("filled");
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = this.state;

    // Create user object
    const newUser = {
      name,
      email,
      password
    };

    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <div>
        <div className="w-full h-screen flex items-center justify-center">
          <div className=" w-3/4 max-w-md">
            <div className=" text-5xl font-bold mb-5">Sign up</div>
            <div className="w-full bg-red-200 text-red-800">
              {this.state.msg}
            </div>
            <div className="mb-4 relative">
              <input
                className="input appearance-none w-full px-3 py-3 pt-5 pb-2 border-b-2 border-gray-300 focus:outline-none active:outline-none"
                id="name"
                name="name"
                type="text"
                autoFocus
                onChange={this.onChange}
              />
              <label className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">
                User name
              </label>
            </div>

            <div className="mb-4 relative">
              <input
                className="input appearance-none w-full px-3 py-3 pt-5 pb-2 border-b-2 border-gray-300 focus:outline-none active:outline-none"
                id="email"
                name="email"
                type="text"
                autoFocus
                onChange={this.onChange}
              />
              <label className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">
                Email Address
              </label>
            </div>
            <div className="mb-4 relative">
              <input
                className="input appearance-none w-full px-3 py-3 pt-5 pb-2 border-b-2 border-gray-300 focus:outline-none active:outline-none"
                id="password"
                type="password"
                name="password"
                autoFocus
                onChange={this.onChange}
              />
              <label className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text">
                Password
              </label>
            </div>
            <div className="flex my-5">
              <div className="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                <input
                  type="checkbox"
                  className="opacity-0 absolute cursor-pointer"
                />
                <svg
                  className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div className="select-none text-gray-600">Keep me logged in</div>
            </div>
            <button
              onClick={this.onSubmit}
              className=" bg-gray-800 bg-indigo-700 hover:bg-indigo-600 text-white font-semibold py-3 w-full rounded transition-small"
            >
              Sign up
            </button>
            <div className="mt-5 select-none">
              <span className="text-md text-gray-600 font-semibold">
                Already have an account!{" "}
                <Link to="login">
                  <span className="text-indigo-700 cursor-pointer">Log in</span>{" "}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(usersignup);
