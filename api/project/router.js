const router = require('express').Router();
const Project = require("./model.js");

router.get("/", function(request, response, next) {
    Project.getProjects()
    .then((data) => {
        const stuff = data.map((project) => {
            return {
                ...project,
                project_completed: project.project_completed === 1
            };
        });
        response.json(stuff);
    })
    .catch(next);
});

router.post("/", function(request, response, next) {
    const project = request.body;
    console.log("req.body ===> ", project);

    Project.postProject(project)
        .then((p) => {
            console.log("did something happen?? ===> ", p);
            response.status(201).json({
                ...p,
                project_completed: p.project_completed === 1
            });
        })
        .catch(next);
});

router.use(function(error, request, response, next) {
    response.status(error.status || 500).json({
        customMessage: "an error occurred inside the projects router",
        message: error.message,
        stack: error.stack
  });
});

module.exports = router;