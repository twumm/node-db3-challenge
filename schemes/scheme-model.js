const db = require('../data/dbConfig');

function find() {
  // returns an array of all schemes in the db
  return db('schemes');
}

function findById(id) {
  // returns a scheme object with specified id
  return db('schemes')
    .where({ id });
}

function findSteps(id) {
  // returns correctly ordered steps by given scheme
  return db('steps')
    .leftJoin('schemes', 'schemes.id', 'steps.scheme_id')
    .where(id === 'steps.scheme_id')
    .orderBy('steps.step_number', "asc");
}

function add(scheme) {
  // inserts scheme object into db
  return db('schemes')
    .insert(scheme)
    .then(ids => findById(ids[0]));
}

function update(changes, id) {
  // updates scheme using specified id
  return db('schemes')
    .insert(changes)
    .where({ id })
    .then(ids => findById(ids[0]));
}

function remove(id) {
  // deletes scheme using specified id
  return db('schemes')
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}
