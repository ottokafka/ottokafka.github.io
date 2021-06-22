import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Navbar from "./Navbar";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// User
import YouTube from "./user/YouTube";
import Medium from "./user/Medium";
import Hackathons from "./user/Hackathons";
import GithubProjects from "./user/GithubProjects";
import Footer from "./user/Footer";

// css
import "./App.css";


const App = () => {
  // in redux action loadBusiness by token and run api to get user data back

  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/youTube" component={YouTube} />
            <Route exact path="/medium" component={Medium} />
            <Route exact path="/hackathons" component={Hackathons} />
            <Route exact path="/GithubProjects" component={GithubProjects} />
          </Switch>
        </Router>
        <Footer />
      </Fragment>
    </Provider>
  );
};
export default App;
