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

// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017/';
// const mongoClient = new MongoClient(
//   url,
//   { useNewUrlParser: true },
//   { useUnifiedTopology: true }
// );

// mongoClient.connect(function(err, client) {
//   const db = client.db('usersdb');
//   const collection = db.collection('users');
//   let user = { name: 'James', age: 18 };
//   collection.insertOne(user, function(err, result) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(result.ops);
//     client.close();
//   });
// });

// TODO: Добавление и получение данных в MongoDB
// Для добавления мы можем использовать различные методы. Если нужно добавить один объект, то применяется метод insertOne(). При добавлении набора объектов можно использовать метод insertMany().

// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017/';
// const mongoClient = new MongoClient(
//   url,
//   { useNewUrlParser: true },
//   { useUnifiedTopology: true }
// );

// let users = [
//   {
//     name: 'Jack',
//     age: 34
//   },
//   {
//     name: 'Juliet',
//     age: 36
//   }
// ];

// mongoClient.connect(function(err, client) {
//   const db = client.db('usersdb');
//   const collection = db.collection('users');

//   collection.insertMany(users, function(err, results) {
//     console.log(results);
//     client.close();
//   });
// });

// Получение данных. Для получения данных из коллекции применяется метод find():
// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017/';
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });

// mongoClient.connect(function(err, client) {
//   const db = client.db('usersdb');
//   const collection = db.collection('users');

//   if (err) return console.log(err);

//   collection.find().toArray(function(err, results) {
//     console.log(results);
//     client.close();
//   });
// });

/* Метод find возвращает специальный объект - Cursor, и чтобы получить все данные у этого объекта вызывается метод toArray(). В этот метод передается функция обратного вызова со стандартными параметрами: err (информация об ошибке при ее наличии) и result (собственно результат выборки).
 */

/*
 С помощью метода find() мы можем дополнительно отфильтровать извлекаемые документы. Например, нам надо найти всех пользователей, у которых имя - Tom: */
// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017/';
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });

// mongoClient.connect(function(err, client) {
//   const db = client.db('usersdb');
//   const collection = db.collection('users');

//   if (err) return console.log(err);

//   collection.find({ name: 'Tom' }).toArray(function(err, results) {
//     console.log(results);
//     client.close();
//   });
// });

/*
Мы можем устанавливать дополнительные критерии фильтрации, например, добавим фильтрацию по возрасту:

collection.find({name: "Tom", age: 23}).toArray(function(err, results){
             
    console.log(results);
    client.close();
});
*/

// TODO: Удаление документов в MongoDB

/*
Удалять документы в MongoDB можно различными способами. Здесь надо отметить следующие методы коллекции:

- deleteMany(): удаляет все документы, которые соответствуют определенному критерию

- deleteOne(): удаляет один документ, который соответствует определенному критерию

- findOneAndDelete(): получает и удаляет один документ, который соответствует определенному критерию

- drop(): удаляет всю коллекцию */

// deleteMany. Удалим всех пользователей, у которых имя "Tom":
// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017/';
// const mongoClient = new MongoClient(
//   url,
//   { useNewUrlParser: true },
//   { useUnifiedTopology: true }
// );

// mongoClient.connect(function(err, client) {
//   if (err) return console.log(err);

//   const db = client.db('usersdb');
//   db.collection('users').deleteMany({ name: 'Tom' }, function(err, result) {
//     console.log(result);
//     client.close();
//   });
// });

/* Первый параметр в методе - фильтр документов, а второй - функция обратного вызова, в которой мы можем получить результат удаления. При этом результат удаления будет представлять сложный объект, содержащий подробную информацию */

// deleteOne | Метод deleteOne() аналогичен методу deleteMany() за тем исключением, что удаляет только один объект:
// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017/';
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });

// mongoClient.connect(function(err, client) {
//   if (err) return console.log(err);

//   const db = client.db('usersdb');
//   db.collection('users').deleteOne({ name: 'Bob' }, function(err, result) {
//     console.log(result);
//     client.close();
//   });
// });

// findOneAndDelete | Метод findOneAndDelete() удаляет один документ по определенному критерию, но по сравнению с методом deleteOne() он возвращает удаленный документ:
// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017/';
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });

// mongoClient.connect(function(err, client) {
//   if (err) return console.log(err);

//   const db = client.db('usersdb');
//   db.collection('users').findOneAndDelete({ age: 21 }, function(err, result) {
//     console.log(result);
//     client.close();
//   });
// });

// drop | Метод drop() удаляет всю коллекцию:
// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017/';
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });

// mongoClient.connect(function(err, client) {
//   if (err) return console.log(err);

//   const db = client.db('usersdb');
//   db.collection('users').drop(function(err, result) {
//     console.log(result);
//     client.close();
//   });
// });

// TODO: Обновление документов в MongoDB
/*
Для обновления элементов в MongoDB есть несколько методов:

  - updateOne: обновляет один документ, который соответствует критерию фильтрации, и возвращает информацию об операции обновления

  - updateMany: обновляет все документы, которые соответствуют критерию фильтрации, и возвращает информацию об операции обновления

  - findOneAndUpdate: обновляет один документ, который соответствует критерию фильтрации, и возвращает обновленный документ

findOneAndUpdate
Метод findOneAndUpdate() обновляет один элемент. Он принимает следующие параметры:

  - Критерий фильтрации документа, который надо обновить

  - Параметр обновления

  - Дополнительные опции обновления, которые по умолчанию имеют значение null

  - Функция обратного вызова, которая выполняется при обновлении

Например, обновим первого пользователя в бд, у которого возраст - 21:
*/
// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017/';
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });

// let users = [
//   { name: 'Bob', age: 34 },
//   { name: 'Alice', age: 21 },
//   { name: 'Tom', age: 45 }
// ];
// mongoClient.connect(function(err, client) {
//   if (err) return console.log(err);

//   const db = client.db('usersdb');
//   const col = db.collection('users');
//   col.insertMany(users, function(err, results) {
//     col.findOneAndUpdate(
//       { age: 21 }, // критерий выборки
//       { $set: { age: 25 } }, // параметр обновления
//       function(err, result) {
//         console.log(result);
//         client.close();
//       }
//     );
//   });
// });

/*
Сначала здесь происходит добавление 3 пользователей в базу данных, а после добавления идет обновление.

Для обновления применяется объект { $set: {age: 25}}. Параметр $set позволяет обновить значения для одного поля или группы полей. В данном случае изменяется поле age.

Третий параметр - функция обратного вызова выводит результат обновления. По умолчанию это старое состояние измененного документа
*/

/* Но, допустим, после обновления мы хотим получать не старое, а новое состояние измененного документа. Для этого мы можем задать дополнительные опции обновления. */
// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017/';
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });

// mongoClient.connect(function(err, client) {
//   if (err) return console.log(err);

//   const db = client.db('usersdb');
//   const col = db.collection('users');
//   col.findOneAndUpdate(
//     { name: 'Bob' }, // критерий выборки
//     { $set: { name: 'Sam' } }, // параметр обновления
//     {
//       // доп. опции обновления
//       returnOriginal: false
//     },
//     function(err, result) {
//       console.log(result);
//       client.close();
//     }
//   );
// });

// TODO: Express и MongoDB
// const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
// const objectId = require('mongodb').ObjectID;

// const app = express();
// const jsonParser = express.json();

// const mongoClient = new MongoClient('mongodb://localhost:27017/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// let dbClient;

// app.use(express.static(__dirname + '/public'));

// mongoClient.connect(function(err, client) {
//   if (err) return console.log(err);
//   dbClient = client;
//   app.locals.collection = client.db('usersdb').collection('users');
//   app.listen(3000, () => {
//     console.log(`Server started on 3000 🔥`);
//   });
// });

// app.get('/api/users', function(req, res) {
//   const collection = req.app.locals.collection;
//   collection.find({}).toArray(function(err, users) {
//     if (err) return console.log(err);
//     res.send(users);
//   });
// });

// app.get('/api/users/:id', function(req, res) {
//   const id = new objectId(req.params.id);
//   const collection = req.app.locals.collection;
//   collection.findOne({ _id: id }, function(err, user) {
//     if (err) return console.log(err);
//     res.send(user);
//   });
// });

// app.post('/api/users', jsonParser, function(req, res) {
//   if (!req.body) return res.sendStatus(400);

//   const userName = req.body.name;
//   const userAge = req.body.age;
//   const user = { name: userName, age: userAge };

//   const collection = req.app.locals.collection;
//   collection.insertOne(user, function(err, result) {
//     if (err) return console.log(err);
//     res.send(user);
//   });
// });

// app.delete('/api/users/:id', function(req, res) {
//   const id = new objectId(req.params.id);
//   const collection = req.app.locals.collection;
//   collection.findOneAndDelete({ _id: id }, function(err, result) {
//     if (err) return console.log(err);
//     let user = result.value;
//     res.send(user);
//   });
// });

// app.put('/api/users', jsonParser, function(req, res) {
//   if (!req.body) return res.sendStatus(400);
//   const id = new objectId(req.body.id);
//   const userName = req.body.name;
//   const userAge = req.body.age;

//   const collection = req.app.locals.collection;
//   collection.findOneAndUpdate(
//     { _id: id },
//     { $set: { age: userAge, name: userName } },
//     { returnOriginal: false },
//     function(err, result) {
//       if (err) return console.log(err);
//       const user = result.value;
//       res.send(user);
//     }
//   );
// });

// // прослушиваем прерывание работы программы (ctrl-c)
// process.on('SIGINT', () => {
//   dbClient.close();
//   process.exit();
// });

/* Для каждого типа запросов здесь определен свой обработчик Express. И в каждом из обработчиков мы каждый раз обращаемся к базе данных. Чтобы не открывать и закрывать подключение каждый раз при каждом запросе, мы открываем подключение в самом начале и только после открытия подключения запускаем прослушивание входящих запросов:

mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("usersdb").collection("users");
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

Поскольку все взаимодействие будет идти с коллекцией users, то получаем ссылку на эту коллекцию в локальную переменную приложения app.locals.collection. Затем через эту переменную мы сможем получить доступ к коллекции в любом месте приложения.


В конце работы скрипта мы можем закрыть подключение, сохраненное в переменную dbClient:
process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});
В данном случае мы прослушиваем событие "SIGINT", которое генерируется при нажатии комбинации CTRL+C в консоли, что завершит выполнение скрипта.

И поскольку Express в качестве хранилища статических файлов использует папку public, то при обращении к приложению по корневому маршруту http://localhost:3000 клиент получит данный файл (public/index.html).
*/

// TODO: Mongoose
/* Mongoose представляет специальную ODM-библиотеку (Object Data Modelling) для работы с MongoDB, которая позволяет сопоставлять объекты классов и документы коллекций из базы данных. Грубо говоря, Mongoose работает подобно инструментам ORM.*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// установка схемы
const userSchema = new Schema({
  name: String,
  age: Number
});

// подключение
mongoose.connect('mongodb://localhost:27017/usersdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const User = mongoose.model('User', userSchema);
const user = new User({
  name: 'John Locke',
  age: 48
});

user.save(function(err) {
  mongoose.disconnect(); // отключение от бд

  if (err) return console.log(err);
  console.log('Сохранен объект', user);
});
