import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Counters{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </a>
          <a className="navbar-brand" href="#">
            Tic Tac Toe{" "}
          </a>
          <a className="navbar-brand" href="#">
            Camera{" "}
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
