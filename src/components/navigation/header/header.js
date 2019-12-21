import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navitems from "./navitems";
import Menuicon from "../../../static/icons/menu.svg";

export default class header extends Component {
  switchNav = () => {
    document.getElementById("maincnt").classList.remove("noAnimation");
    const nav = document.getElementById("navSlider");
    const mainCont = document.getElementById("maincnt");
    nav.classList.toggle("transform-x-100");
    mainCont.classList.toggle("noMargin");
  };

  render() {
    return (
      <div>
        <div className="bg-white w-full py-5 flex fixed top-0 z-20">
          <button onClick={this.switchNav} className="focus:outline-none">
            <div className="ml-5">
              <img src={Menuicon} alt="burger-menu" />
            </div>
          </button>
          <NavLink to="/" exact>
            <div className="ml-5 text-2xl bold">Dashboard</div>
          </NavLink>
        </div>

        <div id="navSlider" className="h-screen fixed top-0 transition-small">
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
