const router = require('express').Router();
const Task = require("./model.js");
const Project = require("../project/model.js");

router.get("/", async function(request, response, next) {
    try {
        const getThoseProjects = await Project.getProjects();
        Task.getTasks()
        .then((data) => {
            const stuff = data.map((t) => {
                const project = getThoseProjects.find((p) => p.project_id === t.project_id);
                return { 
                    ...t,
                    task_completed: t.task_completed === 1,
                    project_name: project.project_name,
                    project_description: project.project_description
                };
            })
            response.status(200).json(stuff);
        })
        .catch(next);
    } catch(error) {
        error(next);
    }
});

router.post("/", function(request, response, next) {
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