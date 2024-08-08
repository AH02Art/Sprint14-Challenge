const { clean } = require("knex-cleaner")

exports.seed = async function(knex) {
  await clean(knex, {
    mode: "truncate",
    ignoreTables: ["knex-migrations", "knex_migrations_lock"]
  });
};