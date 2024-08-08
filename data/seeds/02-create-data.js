const projects = [
  { project_name: "Building RESTful APIs", project_description: "Sprint13-Challenge", project_completed: true },
  { project_name: "Data Persistence", project_description: "Sprint14-Challenge", project_completed: false }
];

const resources = [
  { resource_name: "YouTube", resource_description: "American video-sharing platform owned by Alphabet Inc." },
  { resource_name: "ChatGPT", resource_description: "Artificial intelligence chatbot developed by OpenAI" }
];

const tasks = [
  { task_description: "Wire the routers" , task_notes: "for Sprint 13's challenge", task_completed: true, project_id: 1 },
  { task_description: "Write up middleware", task_completed: true, project_id: 1 },
  { task_description: "Wire the routers", task_completed: true, project_id: 2 },
  { task_description: "implement the database accesss functions" , task_notes: "Each table has 2 model functions", task_completed: false, project_id: 2 }
];

exports.seed = async function(knex) {
  await knex('projects').insert(projects);
  await knex('resources').insert(resources);
  await knex('tasks').insert(tasks);
};