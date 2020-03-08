// TODO: Подключение к MySQL
/* Для работы с сервером MySQL в Node.js можно использовать ряд драйверов. Самые популярные из них mysql и mysql2. По большей части они совместимы. В данном случае мы будем использовать mysql2, так как, судя по ряду тестов, он предоставляет большую производительность.*/

/* Создание подключения
Для создания подключения применяется метод createConnection(), который в качестве параметра принимает настройки подключения и возвращает объект, представляющий подключение.*/

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root', // user
//   database: 'usersdb',
//   password: 'root_pass' // root user password
// });

// connection.connect(function(err) {
//   if (err) {
//     return console.error('Ошибка: ' + err.message);
//   } else {
//     console.log('Подключение к серверу MySQL успешно установлено');
//   }
// });
// // закрытие подключения
// connection.end(function(err) {
//   if (err) {
//     return console.log('Ошибка: ' + err.message);
//   }
//   console.log('Подключение закрыто');
// });

// TODO: Выполнение запросов к MySQL

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb',
//   password: '123456'
// });

// connection.query('SELECT * FROM users', function(err, results, fields) {
//   console.log(err);
//   console.log(results); // собственно данные
//   console.log(fields); // мета-данные полей
// });
// connection.end();

// Также в mysql2 определен метод execute(), который работает аналогичным образом:
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb',
//   password: '123456'
// });

// connection.execute('SELECT * FROM users', function(err, results, fields) {
//   console.log(err);
//   console.log(results); // собственно данные
//   console.log(fields); // мета-данные полей
// });
// connection.end();

/* Параметризация запросов
Если в запрос надо вводить данные, которые приходят извне, то для избежания sql-инъекций рекоммендуется использовать параметризацию.

При параметризации вместо конкретных данных в тексте запроса ставятся плейсхолдеры - знаки вопроса, вместо которых при выполнении запроса будут вставляться собственно данные. Например, добавление данных: */

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb',
//   password: '123456'
// });

// const user = ['Kate Austen', 37];
// const sql = 'INSERT INTO users(name, age) VALUES(?, ?)';

// connection.query(sql, user, function(err, results) {
//   if (err) console.log(err);
//   else console.log('Данные добавлены');
// });

// connection.end();

// TODO: Promise API
// const mysql = require('mysql2');

// const connection = mysql
//   .createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'usersdb',
//     password: 'Supremecoder8*'
//   })
//   .promise();

// // получение объектов
// connection
//   .query('SELECT * FROM users')
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// TODO: Основные операции с данными

//! Создание БД
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456'
// });

// connection.query('CREATE DATABASE usersdb2', function(err, results) {
//   if (err) console.log(err);
//   else console.log('База данных создана');
// });

// connection.end();

//! Создание таблицы
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb2',
//   password: '123456'
// });

// const sql = `create table if not exists users(
//   id int primary key auto_increment,
//   name varchar(255) not null,
//   age int not null
// )`;

// connection.query(sql, function(err, results) {
//   if (err) console.log(err);
//   else console.log('Таблица создана');
// });
// connection.end();

//! Добавление данных
// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb2',
//   password: '123456'
// });
// const sql = `INSERT INTO users(name, age) VALUES('Benjamin Linus', 41)`;
// connection.query(sql, function(err, results) {
//   if (err) console.log(err);
//   console.log(results);
// });
// connection.end();

//! Добавление множества значений
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb2',
//   password: '123456'
// });

// const users = [
//   ['Jack Shephard', 39],
//   ['James Ford', 39],
//   ['Kate Austen', 38]
// ];
// const sql = `INSERT INTO users(name, age) VALUES ?`;

// connection.query(sql, [users], function(err, results) {
//   if (err) console.log(err);
//   console.log(results);
// });

//! Получение данных
// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb2',
//   password: '123456'
// });
// const sql = `SELECT * FROM users`;
// connection.query(sql, function(err, results) {
//   if (err) console.log(err);
//   console.log(results);
// });
// connection.end();

//! выведем только имя для каждого пользователя из базы данных:
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb2',
//   password: '123456'
// });

// const sql = 'SELECT * FROM users';
// connection.query(sql, function(err, results) {
//   if (err) console.log(err);
//   const users = results;
//   for (let i = 0; i < users.length; i++) {
//     console.log(users[i].name);
//   }
// });

// connection.end();

//! Фильтрация данных
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb2',
//   password: '123456'
// });

// const sql = `SELECT * FROM users WHERE name=? AND age=?`;
// const filter = ['Tom', 29];
// connection.query(sql, filter, function(err, results) {
//   if (err) console.log(err);
//   console.log(results);
// });

// connection.end();
/* Здесь запрос фактически будет выглядеть как SELECT * FROM users WHERE name="Tom" AND age=29, и в прицнипе мы могли бы напрямую ввести данные в запрос. Однако чтобы избежать sql-инъекций при передаче в запрос данных извне рекомендуется использовать параметризацию.*/

//! Обновление
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb2',
//   password: '123456'
// });

// const sql = `UPDATE users SET age=? WHERE name=?`;
// const data = [41, 'Kate Austen'];
// connection.query(sql, data, function(err, results) {
//   if (err) console.log(err);
//   console.log(results);
// });

// connection.end();

// С помощью свойства affectedRows объекта results мы можем проверить, сколько строк было обновлено.

//! Удаление
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb2',
//   password: '123456'
// });

// const sql = 'DELETE FROM users WHERE name=?';
// const data = ['Kate Austen']; // удаляем пользователей с именем Sam
// connection.query(sql, data, function(err, results) {
//   if (err) console.log(err);
//   console.log(results);
// });

// connection.end();

// TODO: Пулы подключений
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   connectionLimit: 5,
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb2',
//   password: '123456'
// });

// // добавление объекта
// const sql = 'INSERT INTO users (name, age) VALUES(?, ?) ';
// const data = ['Juliet Burke', 40];
// pool.query(sql, data, function(err, results) {
//   if (err) console.log(err);
//   console.log(results);
// });

// // получение объектов
// pool.query('SELECT * FROM users', function(err, results) {
//   if (err) console.log(err);
//   console.log(results);
// });

// TODO: MySQL & Express
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const pool = mysql.createPool({
  connectionLimit: 5,
  host: 'localhost',
  user: 'root',
  database: 'usersdb2',
  password: '123456'
});

app.set('view engine', 'hbs');

// получение списка пользователей
app.get('/', function(req, res) {
  pool.query('SELECT * FROM users', function(err, data) {
    if (err) return console.log(err);
    res.render('index.hbs', {
      users: data
    });
  });
});
// возвращаем форму для добавления данных
app.get('/create', function(req, res) {
  res.render('create.hbs');
});
// получаем отправленные данные и добавляем их в БД
app.post('/create', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  const name = req.body.name;
  const age = req.body.age;
  pool.query(
    'INSERT INTO users (name, age) VALUES (?,?)',
    [name, age],
    function(err, data) {
      if (err) return console.log(err);
      res.redirect('/');
    }
  );
});

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get('/edit/:id', function(req, res) {
  const id = req.params.id;
  pool.query('SELECT * FROM users WHERE id=?', [id], function(err, data) {
    if (err) return console.log(err);
    res.render('edit.hbs', {
      user: data[0]
    });
  });
});
// получаем отредактированные данные и отправляем их в БД
app.post('/edit', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  const name = req.body.name;
  const age = req.body.age;
  const id = req.body.id;

  pool.query(
    'UPDATE users SET name=?, age=? WHERE id=?',
    [name, age, id],
    function(err, data) {
      if (err) return console.log(err);
      res.redirect('/');
    }
  );
});

// получаем id удаляемого пользователя и удаляем его из бд
app.post('/delete/:id', function(req, res) {
  const id = req.params.id;
  pool.query('DELETE FROM users WHERE id=?', [id], function(err, data) {
    if (err) return console.log(err);
    res.redirect('/');
  });
});

app.listen(3000, function() {
  console.log('Сервер ожидает подключения...');
});
