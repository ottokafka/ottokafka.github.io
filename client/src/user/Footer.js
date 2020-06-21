import React from "react";
import linkedin from "../img/linkedinLogo.png";
import githubLogo from "../img/githubLogo.png";

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
      <footer class="bg-white py-5">
        <div class="container">
          <div class="row align-items-center pb-5">
            <div class="col-md-8">
              <ul class="mb-0 mt-4 p-0 text-center text-md-right title-xs-small title-medium">
                <li class="list-inline-item pl-4">
                  <a
                    href="https://www.linkedin.com/in/otto-kafka-50899b7a/"
                    class="text-gray-dark"
                  >
                    <i class="fa fa-linkedin" src={linkedin}></i>
                    <img src={linkedin} width="45"></img>
                  </a>
                </li>
                <li class="list-inline-item pl-4">
                  <a
                    href="http://www.github.com/ottokafka"
                    class="text-gray-dark"
                  >
                    <img src={githubLogo} width="45"></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row align-items-center border-top pt-5">
            <div class="col text-center">
              <span class="font-alt font-w-600 letter-spacing-1 text-gray-dark text-small text-uppercase">
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
