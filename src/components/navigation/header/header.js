import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Navitems from "./navitems";
import Menuicon from "../../../static/icons/menu.svg";
import Logout from "../../../pages/logout";

class header extends Component {
  switchNav = () => {
    document.getElementById("maincnt").classList.remove("noAnimation");
    const nav = document.getElementById("navSlider");
    const mainCont = document.getElementById("maincnt");
    nav.classList.toggle("transform-x-100");
    mainCont.classList.toggle("noMargin");
  };

  componentDidMount() {
    if (window.innerWidth < 1200) {
      this.switchNav();
    }
  }

  render() {
    return (
      <div>
        <div className="bg-white w-full py-5 flex fixed top-0 z-20 border-gray-300 border-b">
          <button onClick={this.switchNav} className="focus:outline-none">
            <div className="ml-5">
              <img src={Menuicon} alt="burger-menu" />
            </div>
          </button>
          <NavLink to="/" exact>
            <div className="ml-5 text-2xl font-semibold">Dashboard</div>
          </NavLink>
          <div className="ml-auto mr-5">
            <Logout />
          </div>
        </div>

        <div
          id="navSlider"
          className="h-screen fixed top-0 transition-small border-gray-300 border-r"
        >
          <div id="navdrawer" className="pt-20 h-full w-drawer">
            <div className="mt-5">
              <Navitems />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(header);
