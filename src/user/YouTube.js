import React, { Fragment, useEffect } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getYouTube } from "../redux/actions/getYouTube";
import YoutubeLogo from "../img/youtube.webp";

const YouTube = ({ getYouTube, youTubeReducer: { youTubeData, loading } }) => {
  useEffect(() => {
    getYouTube();
  }, [getYouTube]);

  if (loading === true) {
    return <h1>Loading Please wait</h1>;
  } else {
    return (
      <Fragment>
        {/* // A simple divider for style */}
        <section className="h-100 overflow-hidden p-0 w-100 bgRed">
          <div className="container">
            <div className="text-center m-4">
              <img src={YoutubeLogo} alt="Youtube Logo" width="76" />
              <h6 className="textWhite letterSpacing m-4">
                I cover solving algorithms from FreeCodeCamp &amp; much more ...
              </h6>
            </div>
          </div>
        </section>
        {/* // end of the divider */}
        <div className="album py-5 bgBlack">
          <div className="container">
            <div className="row">
              {youTubeData.items.map((result) => {
                var title = result.snippet.title;
                var thumbnail = result.snippet.thumbnails.standard.url;
                var publishedAt = result.snippet.publishedAt;
                var re = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
                var publishedDate = publishedAt.match(re);
                var watchID = result.snippet.resourceId.videoId;
                var watch = `https://www.youtube.com/watch?v=${watchID}`;
                {
                  /* var uploadDate = p.getDate(); */
                }
                console.log(thumbnail);
                return (
                  <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <a href={watch} target="_blank">
                        <img
                          className="card-img-top"
                          src={thumbnail}
                          data-holder-rendered="true"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = YoutubeLogo;
                          }}
                        />
                      </a>
                      <div className="card-body bg-dark">
                        <p className="card-text">{title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group"></div>

                          <small className="text-muted">
                            {publishedDate[0]}
                          </small>
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

YouTube.propTypes = {
  //   checkAppointment: PropTypes.func.isRequired,
};

// on load and display error is something is undefined because api data has not yet been fetched. map it to mapState to props
const mapStateToProps = (state) => ({
  youTubeReducer: state.youTubeReducer,
});

export default connect(mapStateToProps, {
  getYouTube,
})(withRouter(YouTube));
