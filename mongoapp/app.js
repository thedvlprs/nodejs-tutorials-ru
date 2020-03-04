// TODO: Начало работы с MongoDB

/*
Наиболее популярной системой управления базами данных для Node.js на данный момент является MongoDB. Для работы с этой платформой прежде всего необходимо установить сам сервер MongoDB.

При подключении и взаимодействии с бд в MongoDB можно выделить следующие этапы:

- Подключение к серверу
- Получение объекта базы данных на сервере
- Получение объекта коллекции в базе данных
- Взаимодействие с коллекцией (добавление, удаление, получение, изменение данных)
*/

/* Подключение к базе данных
Ключевым классом для работы с MongoDB является класс MongoClient, и через него будет идти все взаимодействия с хранилищем данных. Соответственно вначале мы должны получить MongoClient:
const MongoClient = require('mongodb').MongoClient;

// Для подключения к серверу mongodb применяется метод connect():

// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient('mongodb://localhost:27017/', {
  useNewUrlParser: true
});
mongoClient.connect(function(err, client) {
  if (err) {
    return console.log(err);
  }
  // взаимодействие с базой данных
  client.close();
});
*/

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';
const mongoClient = new MongoClient(
  url,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

mongoClient.connect(function(err, client) {
  const db = client.db('usersdb');
  const collection = db.collection('users');
  let user = { name: 'James', age: 18 };
  collection.insertOne(user, function(err, result) {
    if (err) {
      return console.log(err);
    }
    console.log(result.ops);
    client.close();
  });
});
