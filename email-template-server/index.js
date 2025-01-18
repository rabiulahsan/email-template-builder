const express = require("express");
const app = express();
const cors = require("cors");
const { run } = require("./utils/dbConnection");

require("dotenv").config();

const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

run();

//test
app.get("/", (req, res) => {
  res.send("Server is running....");
});

app.listen(port, () => {
  console.log(`Running on port no ${port}`);
});
