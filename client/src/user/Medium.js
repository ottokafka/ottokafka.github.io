import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getMedium } from "../redux/actions/getYouTube";
import mediumLogo from "../img/medium.png";

const Medium = ({ getMedium, youTubeReducer: { mediumData, loading2 } }) => {
  useEffect(() => {
    getMedium();
  }, [getMedium]);

  if (loading2 === true) {
    return <h1>Loading Please wait</h1>;
  } else {
    return (
      <Fragment>
        {/* // A simple divider for style */}
        <section className="h-100 overflow-hidden p-0 w-100 ">
          <div className="container">
            <div className="text-center m-2">
              <p className="text-black m-4 mediumLogo">Medium</p>
              <h6 className=" m-4">
                Check out some of my written tutorials on Medium
              </h6>
            </div>
          </div>
        </section>
        {/* // end of the divider */}
        <div className="album py-5 bgBlack">
          <div className="container">
            <div className="row">
              {mediumData.map((result) => {
                var title = result.title;
                var subtitle = result.subtitle;
                var thumbnail = result.previewImage;
                var read = result.mediumUrl;

                return (
                  <div className="col-md-4 " key={title}>
                    <div className="card mb-4 shadow-sm">
                      <a href={read} target="_blank" rel="noopener noreferrer">
                        <img
                          className="card-img-top"
                          src={thumbnail}
                          data-holder-rendered="true"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = mediumLogo;
                          }}
                          alt="Medium"
                        />
                      </a>
                      <div className="card-body bgBlack">
                        <p className="card-text text-white phoneText">{title}</p>
                        <h6 className="card-text text-info">Description</h6>
                        <p className="card-text text-white phoneText">{subtitle}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group"></div>
                          <small className="text-muted"></small>
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

Medium.propTypes = {
  //   checkAppointment: PropTypes.func.isRequired,
};

// on load and display error is something is undefined because api data has not yet been fetched. map it to mapState to props
const mapStateToProps = (state) => ({
  youTubeReducer: state.youTubeReducer,
});

export default connect(mapStateToProps, {
  getMedium,
})(withRouter(Medium));
