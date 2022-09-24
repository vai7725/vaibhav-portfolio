const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("./public"));

app.get("*", (req, res) => {
  res.status(200).json({ msg: "Route Does not exist" });
});

const start = async () => {
  try {
    await app.listen(port, () =>
      console.log(`App is listening to the port ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
