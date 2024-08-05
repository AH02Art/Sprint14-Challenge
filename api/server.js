// build your server here and require it from index.js
const express = require("express");
const server = express();

server.use(express.json());

server.use("*", function(request, response) {
    response.json({ 
        project: "Sprint14-Challenge",
        developer: "Alex Handley" 
    });
});

module.exports = server;