const Musixmatch = require("musixmatch");
const init = {
  // Required from Musixmatch.com
  apikey: "3c77046c4a9009e6428a7a88defb2de1",

  // Optional default 'https://api.musixmatch.com/ws/1.1/'
  // baseURL will be prepended to `url` unless `url` is absolute.
  baseURL: "https://api.musixmatch.com/ws/1.1/",

  corsURL: "<Your cors url>",

  // Optional default is 'Json'
  format: "json",
};

export const msx = Musixmatch(init);
