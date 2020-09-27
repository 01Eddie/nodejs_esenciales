const mongo = require('./connect');
const { DB_NAME } = require('./config');

module.exports = {
    postFile: function(film) {
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").insertOne(film);
        return resp;
    }
}