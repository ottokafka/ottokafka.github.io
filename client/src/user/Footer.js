import React from "react";
import linkedin from "../img/linkedinLogo.png";
import githubLogo from "../img/githubLogo.png";
import youtube from "../img/youtube.png";

var d = new Date();
var year = d.getFullYear();

const Footer = () => {
  return (
    <div>
      {/* // A simple divider for style */}
      <section className="h-100 overflow-hidden p-0 w-100 bg-dark ">
        <div className="container">
          <div className="row align-items-center">
            <div className=" col-xl-12 text-center">
              <h1 className="m-5 text-white title">Contact</h1>
            </div>
          </div>
        </div>
      </section>
      {/* // end of the divider */}
      <footer className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center pb-5">
            <div className="col-md-8">
              <ul className="mb-0 mt-4 p-0 text-center text-md-right title-xs-small title-medium">
                <li className="list-inline-item pl-4">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ottokafka/"
                    className="text-gray-dark"
                  >
                    <i className="fa fa-linkedin" src={linkedin}></i>
                    <img alt="linkedIn" src={linkedin} width="45"></img>
                  </a>
                </li>
                <li className="list-inline-item pl-4">
                  <a
                    target="_blank"
                    href="http://www.github.com/ottokafka"
                    className="text-gray-dark"
                  >
                    <img alt="github" src={githubLogo} width="45"></img>
                  </a>
                </li>
                <li className="list-inline-item pl-4">
                  <a
                    target="_blank"
                    target="_blank"
                    href="https://www.youtube.com/channel/UCE9Ow1CqF7lOS4VeiWHlhpQ"
                    className="text-gray-dark"
                  >
                    <img alt="github" src={youtube} width="45"></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row align-items-center border-top pt-5">
            <div className="col text-center">
              <span className="font-alt font-w-600 letter-spacing-1 text-gray-dark text-small text-uppercase">
                © {year} Otto Kafka. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
