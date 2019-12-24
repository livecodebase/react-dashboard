import React, { Component } from "react";
import AppHeader from "../components/navigation/header/header";
import { connect } from "react-redux";

class users extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div id="maincnt" className="mainCont transition-small ">
          <div className="flex justify-center items-center">
            <table className="table-auto w-4/5">
              <thead>
                <tr>
                  <th className="py-2 text-left">Title</th>
                  <th className="py-2 text-left">Author</th>
                  <th className="py-2 text-left">Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Intro to CSS</td>
                  <td className="border px-4 py-2">Adam</td>
                  <td className="border px-4 py-2">858</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(users);
