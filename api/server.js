const express = require("express");
const server = express();
const projectRouter = require("./project/router.js");
const resourceRouter = require("./resource/router.js");
const taskRouter = require("./task/router.js");

server.use(express.json());
server.disable("x-powered-by");

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.use("*", function(request, response) {
    response.json({ 
        project: "Sprint14-Challenge",
        developer: "Alex Handley" 
    });
});

module.exports = server;