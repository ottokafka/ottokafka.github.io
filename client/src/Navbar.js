import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Otto from "./img/otto.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm textWhite bgBlack navbar-dark ">
      <img
        className="mb-2 p-1 rounded-circle"
        src={Otto}
        alt=""
        width="35"
        height="35"
      />
      <h4 className="navbar-brand">Otto Kafka</h4>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link textWhite" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link textWhite" to="/medium">
              Medium
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link textWhite" to="youTube">
              YouTube
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link textWhite" to="hackathons">
              Hackathons
            </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link textWhite" to="GithubProjects">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
