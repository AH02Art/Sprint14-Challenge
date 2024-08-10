const db = require("../../data/dbConfig.js");

function getResources() {
    return db('resources');
}

async function postResource(resource) {
    const possibleResource = await db('resources').where('resource_name', resource.resource_name);
    if (!possibleResource.length) {
        return db('resources').insert(resource)
        .then(([resource_id]) => {
        return db('resources').where('resource_id', resource_id).first();
        });
    }
    return "Something";
}

module.exports = {
    getResources,
    postResource
}