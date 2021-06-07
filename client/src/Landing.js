import React from "react";
import YouTube from "./user/YouTube";
import Medium from "./user/Medium";
import landingLogo from "./img/landingLogo.png";

const Landing = () => {
  return (
    <div>
      <section className="h-100 overflow-hidden p-0 w-100 bgBlack ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="text-white m-4">Otto's Tutorials</h6>
            </div>
            <div className="col">
            {/* <img className="phoneSize" src={landingLogo}/> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <YouTube />
      </section>

      <section>
        <Medium />
      </section>
    </div>
  );
};

export default Landing;
