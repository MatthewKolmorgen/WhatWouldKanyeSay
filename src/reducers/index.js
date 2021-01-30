const initialState = {
  title: "What Would Kanye Say?",
  editing: false,
  loading: false,
  quote: ""
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    case "TOGGLE_EDITING":
      return { ...state, editing: !state.editing };
    case "FETCHING_QUOTE_START":
      return { ...state, loading: true };
    case "FETCHING_QUOTE_SUCCESS":
      return { ...state, quote: action.payload, loading: false };
    case "FETCHING_QUOTE_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
