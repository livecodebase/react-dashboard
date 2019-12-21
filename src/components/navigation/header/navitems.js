import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import DiscoverIcon from "../../../static/icons/explore.svg";
import Collections from "../../../static/icons/collections.svg";
import Artists from "../../../static/icons/artists.svg";
import Albums from "../../../static/icons/albums.svg";
import History from "../../../static/icons/history.svg";
import ArrowLeft from "../../../static/icons/arrow-left.svg";

export default class navitems extends Component {
  state = {
    navItems: [
      {
        name: "Discover",
        icon: DiscoverIcon,
        url: "/"
      },
      {
        name: "Collections",
        icon: Collections,
        url: "/collections"
      },
      {
        name: "Artists",
        icon: Artists,
        url: "/artists"
      },
      {
        name: "Albums",
        icon: Albums,
        url: "/albums"
      },
      {
        name: "History",
        icon: History,
        url: "/history"
      },
      {
        name: "Login",
        icon: History,
        url: "/login"
      }
    ]
  };

  /* Function to toggle navigation width */
  minNavHandler = () => {
    document.getElementById("maincnt").classList.add("noAnimation");
    document.getElementById("navdrawer").classList.toggle("w-drawer-min");
    document.getElementById("collapse-menu").classList.toggle("min-nav-w");
    document.getElementById("maincnt").classList.toggle("main-min-cnt");
    const minnav = document.getElementsByClassName("nav-list");
    for (let i = 0; i < minnav.length; i++) {
      minnav[i].classList.toggle("min-nav");
    }
  };

  render() {
    return (
      <div>
        {this.state.navItems.map(item => {
          return (
            <div key={item.url}>
              <NavLink to={item.url} exact activeClassName="activelink">
                <div className="pl-10 py-3 flex items-center nav-list">
                  <img src={item.icon} alt={item.name} />
                  <span className="text-md font-semibold pl-5 text-dark-blue">
                    {item.name}
                  </span>
                </div>
              </NavLink>
            </div>
          );
        })}
        <button
          id="collapse-menu"
          className="fixed bottom-0 focus:outline-none"
          onClick={this.minNavHandler}
        >
          <div className="py-3 flex justify-center items-center nav-list bg-gray-800">
            <img
              id="collapse-icon"
              width="20px"
              height="20px"
              src={ArrowLeft}
              alt=""
            />
            <span className="text-md text-white font-semibold pl-5">
              Collapse Menu
            </span>
          </div>
        </button>
      </div>
    );
  }
}
