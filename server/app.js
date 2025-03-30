const express = require("express");

const app = express();
const PORT = 3000;
const posts = require("../data/posts.json");
const stories = require("../data/stories.json");
const reals = require("../data/reals.json");
const fs = require("fs");
const path = require("path");

const cors = require("cors");
app.use(cors());
app.use(express.json());
const POSTS_FILE = path.join(__dirname, "../data/posts.json");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.put("/posts/like", (req, res) => {
  const updatedData = req.body;
  const userID = parseInt(updatedData?.userId);
  const like = updatedData?.like;
  console.log(like);

  fs.readFile(POSTS_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    let posts;
    try {
      posts = JSON.parse(data);
    } catch (parseErr) {
      return res.status(500).json({ message: "Error parsing data" });
    }

    let postIndex = posts.posts.findIndex((post) => post.userId === userID);
    
    if (postIndex === -1) {
      return res.status(404).json({ message: "Post not found" });
    }
    if(like){
      posts.posts[postIndex].realScore += 1;
    }else {
      posts.posts[postIndex].realScore -= 1;
    }
    fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ message: "Error saving data" });
      }

      res.json({
        message: "Post updated successfully",
        post: posts.posts[postIndex],
      });
    });
  });
});

// app.get("/posts", (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.json(posts);
// });

app.get("/posts", (req, res) => {
  fs.readFile(POSTS_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading posts file" });
    }
    res.json(JSON.parse(data)); 
  });
});



app.get("/stories", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(stories);
});

app.get("/reals", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(reals);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
