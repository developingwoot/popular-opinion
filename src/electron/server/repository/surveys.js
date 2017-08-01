const db = require('./db');
const table = 'survey';

function get(predicate)
{
    return db.get(table).find(predicate).value();
}

function getAll()
{
    return db.get(table).value();
}

function getById(id)
{
    return db.get(table).getById(id);
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