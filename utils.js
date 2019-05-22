const MongoClient = require('mongodb').MongoClient;

var _db = null;

module.exports.getDb = () => {
    return _db;
};

module.exports.init = function(callback) {
    MongoClient.connect("mongodb+srv://taylor:test123@acit2911-an76n.mongodb.net/test?retryWrites=true", (err, client) => {
        if (err) {
            return console.log(err)
        }
        _db = client.db('users');
        console.log('Successfully connected to MongoDB server');
    });
};