export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  //token:
  //  "BQDFyDiBDcCtS1MftCgs382l8vNXIKVOpb_ztzD8ce84EWVRTe_uQzobfR5bXNyQ-wSdjOqU1Ne7zeryaQgFi1WPPTN33xuLOS8m-6rPoz9HXwQZu1kl3jHhIsxi8RIP3jW9uGdYtXpwbhdsIMBM3utd7oyqjLbs",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
