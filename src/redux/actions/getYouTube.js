import axios from "axios";
import { GET_YOUTUBE_DATA, GET_MEDIUM_DATA, GET_GITHUB_DATA } from "../types";
import mediumJson from "./medium.json";
import youtubeJson from "./youtube.json";

// --- YouTube API
export const getYouTube = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    var url = "/api/youtube";
    const res = await axios.get(url);

    dispatch({
      type: GET_YOUTUBE_DATA,
      payload: res.data,
    });
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
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    var url = "/api/medium";
    const res = await axios.get(url);

    dispatch({
      type: GET_MEDIUM_DATA,
      payload: res.data,
    });
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
