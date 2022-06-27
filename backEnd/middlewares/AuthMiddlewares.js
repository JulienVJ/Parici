const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) =>{
    const accessToken = req.header("accessToken");

    if(!accessToken) return res.send({ error: "Vous n'ètes pas connecté!"});

    try {
        const validToken = verify(accessToken, SECRET_KEY);
        req.user = validToken;
        if(validToken){
            return next();
        }
    } catch (err){
        return res.json({error: err});
    }

};



/* const jwt = require("jsonwebtoken");
function validateToken(req, res, next) {
  const authHeader = req.headers["accessToken"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.token = decoded;
    next();
  });
} */



module.exports = {validateToken};