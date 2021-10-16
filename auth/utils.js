const querystring = require('querystring');
const {SERVER_ROOT_URI, GOOGLE_CLIENT_ID, } = require('../config.js');


module.exports.getGoogleAuthUrl = (redirectURI) => {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  options = {
    redirect_uri: `${SERVER_ROOT_URI}${redirectURI}`,
    client_id: GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };
  return `${rootUrl}?${new URLSearchParams(options)}`;
};


module.exports.redirectURI = async (req, res) =>{
    const code = req.query
}