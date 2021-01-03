export const authEndpoint = "https://accounts.spotify.com/authorize/";

const redirectUri = "http://localhost:3000/";

const clientId = "d288f60ef0f442048431cb3d8d59d744";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
  return window.location.hash.substring(1).split('&').reduce((initial, item) => {
    let parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

//access_token=BQBFAKnr1JF4ZGXL3B9a7GfQ23xIqvouNpCAsWLqY93F4qc9VtWAckNijXm0PfwwSbcfkDCA0QxPw2eRgcdKYV7u5P6xqRkw08qATv4RUd4UukZwjIJOXW_ZCN1DE_FOZHqn9vts5ZUA_ZWXTkITHSWmHlA&token_type=Bearer&expires_in=3600
