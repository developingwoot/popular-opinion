const lowdb = require('lowdb');
const db = lowdb('./db.json');
const uuid = require('uuid/v4');

db.uuid = uuid;


// Set some defaults if your JSON file is empty
db.defaults({ surveys: [] })
  .write()

module.exports = db;