const router = require('express').Router();
// const Project = require("./model.js");

router.get("/", function(request, response) {
    response.send("GET projects here");
});

router.post("/", function(request, response) {
    response.send("POST projects here");
});

router.use(function(error, request, response, next) {
    response.status(error.status || 500).json({
        customMessage: "an error occurred inside the projects router",
        message: error.message,
        stack: error.stack
  });
});

module.exports = router;