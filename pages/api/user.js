export default async (req, res) => {
  console.log("got here");
  res.send({ this: "is a test" });
};
