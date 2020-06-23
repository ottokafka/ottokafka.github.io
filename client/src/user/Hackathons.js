import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import hongkong1 from "../img/hongkong1.jpg";
import hongkong2 from "../img/hongkong2.jpg";
import hongkong3 from "../img/hongkong3.jpg";

import shanghai1 from "../img/shanghai1.jpg";
import shanghai2 from "../img/shanghai2.jpg";

import beijing1 from "../img/beijing1.jpg";
import beijing2 from "../img/beijing2.jpg";
import beijing3 from "../img/beijing3.jpg";

var d = new Date();
var year = d.getFullYear();

const Hackathons = () => {
  return (
    <Fragment>
      {/* // A simple divider for style */}
      <section className="h-100 overflow-hidden p-0 w-100 bgBlack ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <h6 className="text-white m-4">Otto's Hackathon Adventures</h6>

              <h2 className="m-5 text-white title">
                All around the globe hackathons
              </h2>
              <p className="text-white text-muted">
                Beijing, Shanghai, Hong Kong, Shenzhen, California
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* // end of the divider */}
      {/* // A simple divider for style */}
      <section className="h-100 overflow-hidden p-0 w-100 bgRed">
        <div className="container">
          <div className="text-center m-2">
            <p className="text-black m-4 mediumLogo text-white">Hong Kong</p>
            <small className="textWhite ">
              Hackathon hosted by EOS blockchain
            </small>
          </div>
        </div>
      </section>
      {/* // end of the divider */}
      <section className="bgBlack overflow-hidden">
        <div class="row">
          <div class="card bgBlack text-white col-sm-4 ">
            <img
              class="card-img"
              src={hongkong1}
              alt="Card image"
              width="100"
            ></img>
            <div class="card-img-overlay">
              <h5 class="card-title">Hong Kong</h5>
              <p class="card-text"></p>
              <p class="card-text">2019</p>
            </div>
          </div>
          <div class="card bgBlack text-white col-sm-4">
            <img
              class="card-img"
              src={hongkong2}
              alt="Card image"
              width="100"
            ></img>
            <div class="card-img-overlay">
              {/* <h5 class="card-title">Card title</h5> */}
              <p class="card-text"></p>
              {/* <p class="card-text">Last updated 3 mins ago</p> */}
            </div>
          </div>
          <div class="card bgBlack text-white col-sm-4 ">
            <img
              class="card-img"
              src={hongkong3}
              alt="Card image"
              width="100"
            ></img>
            <div class="card-img-overlay">
              <h5 class="card-title">The Team</h5>
              <p class="card-text"></p>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </section>
      {/* // A simple divider for style */}
      <section className="h-100 overflow-hidden p-0 w-100 bgBlack">
        <div className="container">
          <div className="text-center m-2">
            <p className="text-black m-4 mediumLogo text-white">Shanghai</p>
            <small className="textWhite">Hackathon hosted by Angelhack</small>
          </div>
        </div>
      </section>
      {/* // end of the divider */}
      <section className="bgBlack overflow-hidden">
        <div class="row">
          <div class="card bgBlack text-white col-sm-4">
            <img
              class="card-img"
              src={shanghai1}
              alt="Card image"
              width="100"
            ></img>
            <div class="card-img-overlay">
              <h5 class="card-title">Shanghai</h5>
              <p class="card-text">2018</p>
            </div>
          </div>
          <div class="card bgBlack text-white col-sm-8">
            <img
              class="card-img"
              src={shanghai2}
              alt="Card image"
              width="100"
            ></img>
            <div class="card-img-overlay"></div>
          </div>
        </div>
      </section>

      {/* // A simple divider for style */}
      <section className="h-100 overflow-hidden p-0 w-100 bgRed">
        <div className="container">
          <div className="text-center m-2">
            <p className="text-black m-4 mediumLogo text-white">Beijing</p>
            <small className="textWhite">
              Hackathon hosted by WeWork & Angelhack
            </small>
          </div>
        </div>
      </section>
      {/* // end of the divider */}
      <section className="bgBlack overflow-hidden">
        <div class="row">
          <div class="card bgBlack text-white col-sm-4 ">
            <img
              class="card-img"
              src={beijing1}
              alt="Card image"
              width="100"
            ></img>
            <div class="card-img-overlay">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <p class="card-text">2017</p>
            </div>
          </div>
          <div class="card bgBlack text-white col-sm-8">
            <img
              class="card-img"
              src={beijing2}
              alt="Card image"
              width="100"
            ></img>
            <div class="card-img-overlay">
              {/* <h5 class="card-title">Card title</h5> */}
              <p class="card-text"></p>
              {/* <p class="card-text">Last updated 3 mins ago</p> */}
            </div>
          </div>
          {/* <div class="card bgBlack text-white col-sm-4 ">
            <img
              class="card-img"
              src={beijing3}
              alt="Card image"
              width="100"
            ></img>
            <div class="card-img-overlay">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <p class="card-text"></p>
            </div>
          </div> */}
        </div>
      </section>
    </Fragment>
  );
};

Hackathons.propTypes = {
  //   checkAppointment: PropTypes.func.isRequired,
};

// on load and display error is something is undefined because api data has not yet been fetched. map it to mapState to props
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(withRouter(Hackathons));
