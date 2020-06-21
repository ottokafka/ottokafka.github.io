import React from "react";
import YouTube from "./user/YouTube";

import Medium from "./user/Medium";

const Landing = () => {
  return (
    <div>
      <section className="h-100 overflow-hidden p-0 w-100 bgBlack ">
        <div className="container">
          <div className="row align-items-center">
            <div className=" col-xl-7">
              <h6 className="text-white m-4">Otto's Tutorials</h6>

              <h2 className="m-5 text-white title">
                Fullstack Development, Data Structures &amp; Algorithms
              </h2>
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
