// Set up mongoose wrapper for mongo
const mongoose = require("mongoose");
const url = "mongodb+srv://kevinc:THISisa1234@course-sm27n.mongodb.net/";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 3000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 3000, //
  })
  .then(() => console.log("DB server connect"))
  .catch((e) => console.log("DB error", e));

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  avatarUrl: String,
});

try {
  User = mongoose.model("User");
} catch (err) {
  User = mongoose.model("User", userSchema);
}

module.exports = User;
