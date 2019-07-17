const db = require('../data/dbConfig');

function find() {
  // returns an array of all schemes in the db
  return ('schemes');
}

function findById(id) {
  // returns a scheme object with specified id
}

function findSteps(id) {
  // returns correctly ordered steps by given scheme
}

function add(scheme) {
  // inserts scheme object into db
}

function update(changes, id) {
  // updates scheme using specified id
}

function remove(id) {
  // deletes scheme using specified id
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}
