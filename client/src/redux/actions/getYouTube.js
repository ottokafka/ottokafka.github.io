import axios from "axios";
import { GET_YOUTUBE_DATA, GET_MEDIUM_DATA, GET_GITHUB_DATA } from "../types";
import mediumJson from "../../medium.json";
import youtubeJson from "../../youtube.json";
import db from "../../firebaseConfig.js";

//dev
// const serverIP = "http://localhost:5000";

// Production
const serverIP = "https://ottokafka.herokuapp.com"


// --- YouTube API
export const getYouTube = () => async (dispatch) => {
  try {
  const url = serverIP + "/api/youtube";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Read data from firebase store
  const response = db.collection('youtube').doc("youtube");
  response.get().then((doc) => {
    if (doc.exists) {
      const data = JSON.parse(doc.data().json[0]);

        dispatch({
          type: GET_YOUTUBE_DATA,
          payload: data,
        });
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


// Call api to update database after all is finished loading
axios.get(url, config);

  } catch (err) {
    // dispatch local saved json for youtube
    dispatch({
      type: GET_YOUTUBE_DATA,
      payload: youtubeJson,
    });
  }
};

// ------- MEDIUM API
export const getMedium = () => async (dispatch) => {
  try {
  const url = serverIP + "/api/medium";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

      // Read data from firebase store
  const response = db.collection('medium').doc("medium");
  response.get().then((doc) => {
    if (doc.exists) {
      const data = JSON.parse(doc.data().json[0]);

        dispatch({
          type: GET_MEDIUM_DATA,
          payload: data,
        });
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

// calls server to update medium db in background
axios.get(url, config);

  } catch (err) {
    // dispatch local saved json for medium.com
    dispatch({
      type: GET_MEDIUM_DATA,
      payload: mediumJson,
    });
    console.log(err);
  }
};

// --- GITHUB API
export const getGithub = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    var url = "https://api.github.com/users/ottokafka/repos";
    const res = await axios.get(url, config);

    dispatch({
      type: GET_GITHUB_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);

    // dispatch({
    //   type: GET_GITHUB_DATA,
    //   payload: youtubeJson,
    // });
  }
};
