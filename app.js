const express = require("express");
const app = express();
// importo il posts router
const PostsRouter = require("./routers/posts.js");


const HOST = "http://localhost";
const PORT = 3001;


// server start
app.listen(PORT, (req, res) => {
    console.log(`Server running at ${HOST}:${PORT}`);
})

// inserisco la cartella public
app.use(express.static("public"));

// router
app.use("/posts", PostsRouter);