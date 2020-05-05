const User = require("../../models/user");

export default async (req, res) => {
  const incomingUser = req.body ? JSON.parse(req.body) : null;

  try {
    if (!incomingUser) {
      throw "No user object sent";
    }
    const newUser = new User(incomingUser);
    await newUser.save(function (err, user) {
      if (err && err.code === 11000) {
        res.send({ error: "Email ID already exists" });
        return;
      }
      if (err) return console.error(err);
      res.send({ success: `${user.email} saved to collection.` });
    });
  } catch (error) {
    res.status(400);
    res.send({ error: error });
  }
};
