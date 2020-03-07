// TODO: Подключение к MySQL
/* Для работы с сервером MySQL в Node.js можно использовать ряд драйверов. Самые популярные из них mysql и mysql2. По большей части они совместимы. В данном случае мы будем использовать mysql2, так как, судя по ряду тестов, он предоставляет большую производительность.*/

/* Создание подключения
Для создания подключения применяется метод createConnection(), который в качестве параметра принимает настройки подключения и возвращает объект, представляющий подключение.*/

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // user
  database: 'usersdb',
  password: 'root_pass' // root user password
});

connection.connect(function(err) {
  if (err) {
    return console.error('Ошибка: ' + err.message);
  } else {
    console.log('Подключение к серверу MySQL успешно установлено');
  }
});
// закрытие подключения
connection.end(function(err) {
  if (err) {
    return console.log('Ошибка: ' + err.message);
  }
  console.log('Подключение закрыто');
});
