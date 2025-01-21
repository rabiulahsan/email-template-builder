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

app.get("/templates", (req, res) => {
  res.json(templates);
});

app.get("/templates/:id", (req, res) => {
  const { id } = req.params;
  const template = templates.find((t) => t.id === parseInt(id));
  if (template) {
    res.json(template);
  } else {
    res.status(404).json({ message: "Template not found" });
  }
});

//test
app.get("/", (req, res) => {
  res.send("Server is running....");
});

app.listen(port, () => {
  console.log(`Running on port no ${port}`);
});

const templates = [
  {
    id: 1,
    name: "Minimalist Template",
    image:
      "https://i.ibb.co.com/ZLWhQc4/Screenshot-2025-01-19-at-13-01-50-etsymil-Mail-Builder-Customize-Content-Dashboard-by-Viola-Dwi-for.png",
    sections: [
      {
        id: 1,
        type: "logo",
        url: "/",
        classes: "mx-auto w-[100px] h-[60px] object-contain",
      },
      {
        id: 2,
        type: "title",
        content: "Edit your Title for the Email",
        classes: "text-4xl font-bold text-center mt-4 px-3 py-2 cursor-pointer",
      },
      {
        id: 3,
        type: "title-desc",
        content: "Event details here...",
        classes:
          "text-base text-center text-slate-600 mb-6 px-3 py-2 cursor-pointer",
      },
      {
        id: 5,
        type: "title-button",
        content: "Your Button",
        url: "/",
        classes:
          "bg-orange-500 text-white font-semibold py-2 px-5  rounded-sm hover:bg-orange-600 cursor-pointer",
      },
      { id: 6, type: "divider", content: "", classes: "border-t my-4" },
      {
        id: 4,
        type: "image",
        url: "",
        classes: " h-[400px] mx-auto my-4 object-contain",
      },
      {
        id: 7,
        type: "content",
        content: "Additional information here.",
        classes:
          "text-base text-center text-slate-600 px-3 py-2 cursor-pointer",
      },
      {
        id: 8,
        type: "footer",
        content: "Copyright © 2025 - All right reserved by Company Name",
        classes:
          "text-base text-center bg-slate-800 font-semibold flex justify-center items-center text-white py-5 mt-6 cursor-pointer",
      },
    ],
  },
  {
    id: 2,
    name: "Blog Template",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/free-email-template-colorlib-8.jpg",
    sections: [],
  },
  {
    id: 3,
    name: "Wedding Template",
    image:
      "https://cdn.dribbble.com/userupload/16340444/file/original-1c7accb2ebd50c180c20ed06e39cf3bb.png?resize=1600x1200&vertical=center",
    sections: [],
  },
];
