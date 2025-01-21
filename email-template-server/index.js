const express = require("express");
const app = express();
const cors = require("cors");
const { run, db } = require("./utils/dbConnection");
const { ObjectId } = require("mongodb");

require("dotenv").config();

const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

run();

const templatesCollection = db.collection("templates");
const createdTemplatesCollection = db.collection("created-templates");

//api for getting all templates
app.get("/api/get/templates", async (req, res) => {
  try {
    const result = await templatesCollection.find().toArray();
    res.json(result);
  } catch (error) {
    console.error("Error fetching templates:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching templates" });
  }
});

//test
app.get("/", (req, res) => {
  res.send("Server is running....");
});

app.listen(port, () => {
  console.log(`Running on port no ${port}`);
});
