const pouchdb = require('pouchdb');
const db = new pouchdb('popular-opinion');
const uuid = require('uuid/v4');

db.uuid = uuid;

module.exports = db;