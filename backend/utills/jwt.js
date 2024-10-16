const jwt = require("jsonwebtoken");
const secrete_key = "LDOJ3NLSSNLK3O8345833R";
exports.createjwt = (data) => {
  return jwt.sign(data, secrete_key);
};

exports.verifyJwt = (token) => {
  return jwt.verify(token, secrete_key);
};
