import axios from "axios";

export const toggleEditing = () => {
  return { type: "TOGGLE_EDITING" };
};

export const updateTitle = (newTitle) => {
  return { type: "UPDATE_TITLE", payload: newTitle };
};

export const getQuote = () => (dispatch) => {
  dispatch({ type: "FETCHING_QUOTE_START" });
  axios
    .get("https://api.kanye.rest")
    .then((res) => {
      dispatch({ type: "FETCHING_QUOTE_SUCCESS", payload: res.data.quote });
      console.log(res);
    })
    .catch((err) => {
      dispatch({
        type: "FETCHING_QUOTE_FAILURE",
        payload: err.response.message
      });
      console.log(err);
    });
};
