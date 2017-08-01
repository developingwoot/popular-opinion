const low = require('lowdb');
const db = low('db.json');
db._.mixin(require('lodash-id'));

function get(table, predicate)
{
    return db.get(table).find(predicate).value();
}

function getAll(table)
{
    return db.get(table).value();
}

function getById(table, id)
{
    return db.get(table).getById(id);
}

function addItem(table, item)
{
    return db.get(table).insert(item);
}

function updateItem(table, id, item)
{
    return db.get(table).updateById(id, item);
}

function removeItem(table, id)
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