const db = require('./db');

function get()
{
    return db.get('surveys').value();
}

function getById(id)
{
    return db.get('surveys')
      .find({ id: id })
      .value();
}

function add(item)
{
    let id = db.uuid();
    item.id = id;
    console.log("add item", item);
    db.get('surveys').push({id : item.id, question: item.question, answers : item.answers }).write();
}

function update(id, item)
{
    db.get('surveys')
        .find({ id: id })
        .assign({ question: item.question, answers: item.answers })
        .write()
}

function remove(id)
{
    db.get('surveys')
        .remove({ id : id })
        .write();
}

module.exports = {
    get : get,
    getById : getById,
    add : add,
    update : update,
    remove : remove
}