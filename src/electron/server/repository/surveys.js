const db = require('./db');
const table = 'surveys';

function get(predicate)
{
    return db.get(table, predicate);
}

function getAll()
{
    return db.getAll(table);
}

function getById(id)
{
    return db.getById(table, id);
}

function addItem(item)
{
    return db.get(table).insert(item);
}

function updateItem(id, item)
{
    return db.get(table).updateById(id, item);
}

function removeItem(id)
{
    return db.get(table).removeById(id);
}

module.exports = {
    get : get,
    getAll : getAll,
    getById : getById,
    addItem : addItem,
    updateItem : updateItem,
    removeItem : removeItem
}