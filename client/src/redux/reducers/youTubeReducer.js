import { GET_YOUTUBE_DATA, GET_MEDIUM_DATA, GET_GITHUB_DATA } from "../types";

const initialState = {
  loading: true,
  loading2: true,
  loading3: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_YOUTUBE_DATA:
      return {
        ...state,
        youTubeData: payload,
        loading: false,
      };
    case GET_MEDIUM_DATA:
      return {
        ...state,
        mediumData: payload,
        loading2: false,
      };
    case GET_GITHUB_DATA:
      return {
        ...state,
        githubData: payload,
        loading3: false,
      };

    default:
      return state;
  }
}
