const router = require('express').Router();
// const Task = require("./model.js");

router.get("/", function(request, response) {
    response.send("GET tasks here");
});

router.post("/", function(request, response) {
    response.send("POST tasks here");
});

router.use(function(error, request, response, next) {
    response.status(error.status || 500).json({
        customMessage: "an error occurred inside the tasks router",
        message: error.message,
        stack: error.stack
  });
});

module.exports = router;