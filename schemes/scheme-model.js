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
  return db('schemes')
    .innerJoin('steps', 'schemes.id', 'steps.scheme_id')
    .where('steps.scheme_id', id)
    .orderBy('steps.step_number', "asc");
}

function add(scheme) {
  // inserts scheme object into db
  return db('schemes')
    .insert(scheme)
    .then(ids => findById(ids[0]));
}

function addStep(steps, id) {
  return db('steps')
    .insert({
      step_number: steps.step_number,
      instructions: steps.instructions,
      scheme_id: id
    });
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
  addStep,
  update,
  remove
}
