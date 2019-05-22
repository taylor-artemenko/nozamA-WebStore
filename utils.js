const MongoClient = require('mongodb').MongoClient;

var _db = null;

module.exports.getDb = () => {
    return _db;
};


module.exports.init = function(callback) {
    MongoClient.connect('mongodb://heroku_8vt9b6p4:test123@ds259586.mlab.com:59586/heroku_8vt9b6p4', (err, client) => {
        if (err) {
            return console.log('Unable to connect to DB')
        }
        _db = client.db('users');
        console.log('Successfully connected to MongoDB server');
    });
};