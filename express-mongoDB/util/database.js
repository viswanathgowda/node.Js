const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://mattaviswanath:Vishwa123@cluster-vishwa.gijkjxw.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster-Vishwa"
  )
    .then((client) => {
      console.log("connected!");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
