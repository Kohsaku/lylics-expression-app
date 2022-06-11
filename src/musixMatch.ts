const Musixmatch = require("musixmatch");
const init = {
  // Required from Musixmatch.com
  apikey: "",

  // Optional default 'https://api.musixmatch.com/ws/1.1/'
  // baseURL will be prepended to `url` unless `url` is absolute.
  baseURL: "https://api.musixmatch.com/ws/1.1/",

  corsURL: "<Your cors url>",

  // Optional default is 'Json'
  format: "json",
};

export const msx = Musixmatch(init);
