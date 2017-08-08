const db = require('./db');

function get()
{
    return db.allDocs({
        include_docs: true,
        attachments: true
    })
}

function getById(id)
{
    return db.get(id);
}

function add(item)
{
    let id = db.uuid();
    item._id = id;
    return db.put(item);
}

function update(id, item)
{
    // fetch 
    return db.get(id).then(function (doc) {
        // update 
        doc.question = item.question;
        doc.answers = item.answers;
        // put them back
        return db.put(doc);
    }).then(function () {
        return db.get(id);
    });
}

function remove(id)
{
    db.get(id).then(function(doc) {
        return db.remove(doc);
    }).then(function (result) {
        // handle result
    }).catch(function (err) {
        console.log(err);
    });
}

module.exports = {
    get : get,
    getById : getById,
    add : add,
    update : update,
    remove : remove
}