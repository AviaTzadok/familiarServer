//authintication
const jwt = require("jsonwebtoken");
module.exports = function authJWTWeb(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log("token", token);
    jwt.verify(token, process.env.TOKEN, (err, user) => {
      console.log(process.env.TOKEN);
      if (err) {
        console.log("err", err);
        return res.sendStatus(403);
      }
      req.user = JSON.parse(user.user);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
