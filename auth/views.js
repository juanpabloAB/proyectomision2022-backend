//const Model = require("./models");
const jwt = require("jsonwebtoken");
const {
  SERVER_ROOT_URI,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  JWT_SECRET,
  REDIRECT_URI_FRONT
} = require("../config.js");
const utils = require("./utils");
const redirectURI = "/google";

module.exports.redirectURI = redirectURI;

const axios = require("axios");

module.exports.LogIn = async (req, res) => {
  res.send(utils.getGoogleAuthUrl(`/auth${this.redirectURI}`));
};

function getTokens(code, client_id, client_secret, redirect_uri) {
  url = "https://oauth2.googleapis.com/token";
  values = {
    code,
    client_id,
    client_secret,
    redirect_uri,
    grant_type:"authorization_code",
  };
  
  return axios
    .post(url, new URLSearchParams(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

module.exports.getUser = async (req, res) => {
  const code = req.query.code;
  const response = await getTokens(
    code,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    `${SERVER_ROOT_URI}/auth${this.redirectURI}`,
  );
  const googleUser = await axios({
    method: "get",
    url: `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&${new URLSearchParams({access_token:response.access_token})}`,
    headers: {
      Authorization: `Bearer ${response.id_token}`,
    },
  })
    .then((res) => res.data)
    .catch((err) => err);
  //console.log(googleUser);
  const token = jwt.sign(googleUser, JWT_SECRET, {expiresIn:'1d'});
  console.log(`${REDIRECT_URI_FRONT}?${new URLSearchParams({token: token.toString()})}`)
  res.redirect(`${REDIRECT_URI_FRONT}?${new URLSearchParams({ auth:'google', token: token.toString()})}`);
};
