async function verifyToken(req, res, next) {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send("Authorization Denied");
    }
    const token = req.headers.authorization.split(" ")[1];
    if (token === "null") {
      return res.status(401).send("Authorization Denied");
    }
    const payload = await jwt.verify(token, "secretsecretword");
    if (!payload) {
      return res.status(401).send("Authorization denied");
    }
    req.userId = payload._id;
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).send("Unauthorized request");
  }
}

module.exports = verifyToken;
