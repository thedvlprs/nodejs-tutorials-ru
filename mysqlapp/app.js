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
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'usersdb2',
  password: '123456'
});

const sql = 'DELETE FROM users WHERE name=?';
const data = ['Kate Austen']; // удаляем пользователей с именем Sam
connection.query(sql, data, function(err, results) {
  if (err) console.log(err);
  console.log(results);
});

connection.end();
