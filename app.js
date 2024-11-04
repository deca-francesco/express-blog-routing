const express = require("express");
const app = express();

const HOST = "http://localhost";
const PORT = 3001;


// server start
app.listen(PORT, (req, res) => {
    console.log(`Server running at ${HOST}:${PORT}`);
})