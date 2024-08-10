const router = require('express').Router();
const Resource = require("./model.js");

router.get("/", function(request, response, next) {
    Resource.getResources()
        .then((data) => {
            response.json(data);
        })
        .catch(next);
});

router.post("/", function(request, response, next) {
    const resource = request.body;
    Resource.postResource(resource)
        .then((r) => {
            if (r === "Something") {
                response.status(400).json("name already exists in table");
            } else {
                response.status(201).json(r);
            }
        })
        .catch(next);
});

router.use(function(error, request, response, next) {
    response.status(error.status || 500).json({
        customMessage: "an error occurred inside the resources router",
        message: error.message,
        stack: error.stack
  });
});

module.exports = router;