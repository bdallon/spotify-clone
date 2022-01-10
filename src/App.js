import { responsiveFontSizes } from "@mui/material";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import { useDataLayerValue } from "./DataLayer";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null); Not loner used because of the DataLayer
  const [{ user, token }, dispatch] = useDataLayerValue();
  //useEffect Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //Sets the token to the sportify web api
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });

      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      );

      spotify.getPlaylist("37i9dQZEVXcEbX6Zwe75n4").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);

  // console.log("🤵", user);
  // console.log("👽", token);

  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
