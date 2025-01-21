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

//api for getting all templates layout
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

//api for getting a single template layout by ID
app.get("/api/get/templates/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const template = await templatesCollection.findOne({
      _id: new ObjectId(String(id)),
    });
    if (template) {
      res.json(template);
    } else {
      res.status(404).json({ message: "Template not found" });
    }
  } catch (error) {
    console.error("Error fetching template by ID:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the template" });
  }
});

//api for creating a new template by layout
app.post("/api/create/template", async (req, res) => {
  const newTemplate = req.body;

  // Clone the newTemplate object and remove _id if it exists
  const { _id, ...templateWithoutId } = req.body;

  try {
    const result = await createdTemplatesCollection.insertOne(
      templateWithoutId
    );
    if (result.insertedId) {
      res.json({ message: "Template created successfully", result: result });
    } else {
      res
        .status(500)
        .json({ message: "An error occurred while creating the template" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while creating the template 2" });
  }
});

//test
app.get("/", (req, res) => {
  res.send("Server is running....");
});

app.listen(port, () => {
  console.log(`Running on port no ${port}`);
});
