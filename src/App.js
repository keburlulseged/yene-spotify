import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./context/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [user, dispatch] = useDataLayerValue();
  const [token] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log("In spotify.getUserPlaylists()");
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists.items
        })
      })

    }

  }, []);
  console.log("I'm in the app baby");
  console.log(user);

  return <div className="app">{token ? <Player spotify={spotify}/> : <Login />}</div>;
}

export default App;
