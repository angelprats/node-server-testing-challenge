const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(autobot) {
    return db('autobots').insert(autobot, 'id');
}

async function update(id, changes) {
    return null;
}

function remove(id) {
    return null;
}

function getAll() {
    return db('autobots');
}

function findById(id) {
    return null;
}

