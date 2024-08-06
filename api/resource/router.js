const router = require('express').Router();
// const Resource = require("./model.js");

router.get("/", function(request, response) {
    response.send("GET resources here");
});

router.post("/", function(request, response) {
    response.send("POST resources here");
});

router.use(function(error, request, response, next) {
    response.status(error.status || 500).json({
        customMessage: "an error occurred inside the resources router",
        message: error.message,
        stack: error.stack
  });
});

module.exports = router;