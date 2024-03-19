const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://lfkodama:I7mA1itcAAsLf7mI@cluster0.5vnzxcy.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
    .then(client => {
        console.log('Conectado ao MongoDB com Sucesso!');
        _db = client.db();
        callback(client);
    })
    .catch(err=> {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;