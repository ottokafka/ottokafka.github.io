import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getGithub } from "../redux/actions/getYouTube";
import githubLogo2 from "../img/githubLogo3.png";

const GithubProjects = ({
  getGithub,
  youTubeReducer: { githubData, loading3 },
}) => {
  useEffect(() => {
    getGithub();
  }, [getGithub]);

  if (loading3 === true) {
    return <h1>Loading Please wait</h1>;
  } else {
    return (
      <Fragment>
        {/* // A simple divider for style */}
        <section className="h-100 overflow-hidden p-0 w-100 ">
          <div className="container">
            <div className="text-center m-2">
              <p className="text-black m-4 mediumLogo">Github Projects</p>
              <h6 className=" m-4">
                Check out some of my on projects on Github
              </h6>
            </div>
          </div>
        </section>
        {/* // end of the divider */}
        <div className="album py-5 bgBlack">
          <div className="container">
            <div className="row">
              {githubData.map((result) => {
                var title = result.name;
                var description = result.description;
                var code = result.html_url;
                var demo = result.homepage;

                return (
                  <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                      <img
                        class="card-img"
                        src=""
                        alt="Github"
                        width="100"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = githubLogo2;
                        }}
                      />

                      <div class="card-img-overlay">
                        <a class="card-title" href={demo} target="_blank" rel="noopener noreferrer">
                          {demo == null ? (
                            ""
                          ) : (
                            <button type="button" class="btn btn-success">
                              Demo
                            </button>
                          )}
                        </a>

                        <a
                          class="card-title  float-right"
                          href={code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button type="button" class="btn btn-secondary">
                            Code
                          </button>
                        </a>
                      </div>
                      <div className="card-body bgBlack">
                        <p className="card-text text-white">{title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group"></div>
                          <small className="text-muted">{description}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

GithubProjects.propTypes = {
  //   checkAppointment: PropTypes.func.isRequired,
};

// on load and display error is something is undefined because api data has not yet been fetched. map it to mapState to props
const mapStateToProps = (state) => ({
  youTubeReducer: state.youTubeReducer,
});

export default connect(mapStateToProps, {
  getGithub,
})(withRouter(GithubProjects));
