const db = require("../../data/dbConfig.js");

function getTasks() {
    return db('tasks');
}

async function postTasks(task) {
    return "Something";
}

module.exports = {
    getTasks,
    postTasks
}
