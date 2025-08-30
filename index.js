const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, CI/CD Pipeline!");
});

app.get("/hello", (req, res) => {
    res.send("Github Actions with Render.com");
});


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server }; // Export the server
