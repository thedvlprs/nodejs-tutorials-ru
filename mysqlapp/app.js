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

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'usersdb',
  password: '123456'
});

const user = ['Kate Austen', 37];
const sql = 'INSERT INTO users(name, age) VALUES(?, ?)';

connection.query(sql, user, function(err, results) {
  if (err) console.log(err);
  else console.log('Данные добавлены');
});

connection.end();
