const express = require('express');

const app = express();
const PORT = 3000;
const posts = require("../data/posts.json");
const stories = require("../data/stories.json");


const cors = require("cors");
app.use(cors()); 

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/posts", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(posts);
  });

app.get("/stories", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(stories);
  });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});