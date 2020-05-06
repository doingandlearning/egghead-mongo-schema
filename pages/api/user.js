var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://kevinc:THISisa1234@course-sm27n.mongodb.net/";

export default async (req, res) => {
  const user = req.body ? JSON.parse(req.body) : null;

  try {
    if (!user) {
      throw "No user object sent";
    }

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("test");

      dbo.collection("users").insertOne(user, function (err, response) {
        if (err && err.code === 11000) {
          res.send({ error: "Email ID already exists" });
          return;
        }
        if (err) throw err;
        res.send(response);
      });
    });
  } catch (error) {
    res.status(400);
    res.send({ error: error });
  }
};
