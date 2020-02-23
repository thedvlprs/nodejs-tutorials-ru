// const http = require('http');
// http
//   .createServer(function(request, response) {
//     response.end('Hello Node.js!');
//   })
//   .listen(3000, '127.0.0.1', function() {
//     console.log('Server listening on port 3000');
//   });

// const os = require('os');
// // получим имя текущего пользователя
// let userName = os.userInfo().username;

// console.log(userName);

// const greeting = require('./greeting');

// const os = require('os');
// const greeting = require('./greeting');

// // получим имя текущего пользователя
// let userName = os.userInfo().username;

// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));

// const User = require('./user');

// let lisa = new User('Mona Lisa', 503);
// lisa.sayHi();

// var greeting1 = require('./greeting');
// console.log(`Hello ${greeting1.name}`); // Hello Alice

// var greeting2 = require('./greeting');
// greeting2.name = 'Bob';

// console.log(`Hello ${greeting2.name}`); // Hello Bob
// // greeting1.name тоже изменилось
// console.log(`Hello ${greeting1.name}`); // Hello Bob

// const welcome = require('./welcome');

// welcome.getMorningMessage();
// welcome.getEveningMessage();

// const greeting = require('./greeting');

// global.name = 'Lisa';

// global.console.log(date);
// console.log(greeting.getMessage());

// let nodePath = process.argv[0];
// let appPath = process.argv[1];
// let name = process.argv[2];
// let age = process.argv[3];

// console.log('nodePath: ' + nodePath);
// console.log('appPath: ' + appPath);
// console.log();
// console.log('name: ' + name);
// console.log('age: ' + age);

// function displaySync(data) {
//   console.log(data);
// }

// console.log('Начало работы программы');

// displaySync('Обработка данных...');

// console.log('Завершение работы программы');

// function display(data, callback) {
//   // с помощью случайного числа определяем ошибку
//   var randInt = Math.random() * (10 - 1) + 1;
//   var err =
//     randInt > 5 ? new Error('Ошибка выполнения. randInt больше 5') : null;

//   setTimeout(function() {
//     callback(err, data);
//   }, 0);
// }

// console.log('Начало работы программы');

// display('Обработка данных...', function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });

// console.log('Завершение работы программы');

// function displaySync(callback) {
//   callback();
// }

// console.log('Начало работы программы');

// setTimeout(function() {
//   console.log('timeout 500');
// }, 500);

// setTimeout(function() {
//   console.log('timeout 100');
// }, 100);

// displaySync(function() {
//   console.log('without timeout');
// });
// console.log('Завершение работы программы');

// TODO: Чтение из файла
// const fs = require('fs');

// // асинхронное чтение
// fs.readFile('hello.txt', 'utf8', function(error, data) {
//   console.log('Асинхронное чтение файла');

//   if (error) throw error; // если возникла ошибка
//   console.log(data); // выводим считанные данные
// });

// // синхронное чтение
// console.log('Синхронное чтение файла');
// let fileContent = fs.readFileSync('hello.txt', 'utf8');
// console.log(fileContent);

// TODO: Запись файла
// const fs = require('fs');

// fs.writeFile('hello.txt', 'Hello, world!', function(error) {
//   if (error) throw error; // если возникла ошибка
//   console.log('Асинхронная запись файла завершена. Содержимое файла:');
//   let data = fs.readFileSync('hello.txt', 'utf8');
//   console.log(data); // выводим считанные данные
// });

/*
Следует отметить, что эти методы полностью перезаписывают файл. Если надо дозаписать файл, то применяются методы fs.appendFile()/fs.appendFileSync():
*/

// const fs = require('fs');

// fs.appendFileSync('hello.txt', 'This is another try');

// fs.appendFile('hello.txt', 'This is try no.2', function(error) {
//   if (error) throw error; // если возникла ошибка

//   console.log('Запись файла завершена. Содержимое файла:');
//   let data = fs.readFileSync('hello.txt', 'utf8');
//   console.log(data); // выводим считанные данные
// });

// TODO: Удаление файла

/*
Для удаления файла в синхронном варианте используется функция fs.unlinkSync(), которая в качестве параметра принимает путь к удаляемому файлу:
fs.unlinkSync("hello.txt")

Также для удаления файла можно использовать асинхронную функцию fs.unlink(), которая принимает путь к файлу и функцию, вызываемую при завершении удаления:
fs.unlink("hello.txt", (err) => {
  if (err) console.log(err); // если возникла ошибка
  else console.log("hello.txt was deleted");
});
*/
// const fs = require('fs');

// fs.unlink('hello.txt', err => {
//   if (err) console.log(err);
//   // если возникла ошибка
//   else console.log('hello.txt was deleted');
// });

// TODO: События
// const Emitter = require('events');

// let emitter = new Emitter();
// let eventName = 'greet';

// emitter.on(eventName, function() {
//   console.log('Hello all!');
// });

// emitter.on(eventName, function() {
//   console.log('Привет!');
// });

// emitter.emit(eventName);

// Передача параметров событию
// const Emitter = require('events');

// let emitter = new Emitter();
// let eventName = 'greet';
// emitter.on(eventName, function(data) {
//   console.log(data);
// });

// emitter.emit(eventName, 'Привет пир!');

// Наследование от EventEmitter
// const util = require('util');
// const EventEmitter = require('events');

// function User() {}
// util.inherits(User, EventEmitter);

// let eventName = 'greet';
// User.prototype.sayHi = function(data) {
//   this.emit(eventName, data);
// };
// let user = new User();
// // добавляем к объекту user обработку события 'greet'
// user.on(eventName, function(data) {
//   console.log(data);
// });

// user.sayHi('Мне нужна твоя одежда...');

/*
С помощью возможностей ES6 мы можем упростить выше пример:
Результат будет тот же, но теперь не нужно использовать функцию util.inherits.
*/

// const EventEmitter = require('events');

// let eventName = 'greet';

// class User extends EventEmitter {
//   sayHi(data) {
//     this.emit(eventName, data);
//   }
// }

// let user = new User();
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function(data) {
//   console.log(data);
// });

// user.sayHi('Мне нужна твоя одежда...');

// TODO: Сервер. Создание сервера

// REQUEST
// const http = require('http');

// http
//   .createServer(function(req, res) {
//     console.log('Url: ' + req.url);
//     console.log('Method: ' + req.method);
//     console.log('User-Agent: ' + req.headers['user-agent']);
//     console.log('All headers');
//     console.log(req.headers);

//     res.end();
//   })
//   .listen(3000);

// RESPONSE
// const http = require('http');

// http
//   .createServer(function(request, response) {
//     response.setHeader('UserId', 12);
//     response.setHeader('Content-Type', 'text/html; charset=utf-8;');
//     response.write('<h2>hello world</h2>');
//     response.end();
//   })
//   .listen(3000);

// const http = require('http');

// http
//   .createServer(function(request, response) {
//     response.setHeader('Content-Type', 'text/html');
//     response.write('<!DOCTYPE html>');
//     response.write('<html>');
//     response.write('<head>');
//     response.write('<title>Hello Node.js</title>');
//     response.write('<meta charset="utf-8" />');
//     response.write('</head>');
//     response.write('<body><h2>Привет миг</h2></body>');
//     response.write('</html>');
//     response.end();
//   })
//   .listen(3000);

// Маршрутизация
// const http = require('http');

// http
//   .createServer(function(req, res) {
//     res.setHeader('Content-Type', 'text/html; charset=utf-8');

//     if (req.url === '/home' || req.url === '/') {
//       res.write('<h2>Home</h2>');
//     } else if (req.url == '/about') {
//       res.write('<h2>About</h2>');
//     } else if (req.url == '/contact') {
//       res.write('<h2>Contact</h2>');
//     } else {
//       res.write('<h2>Not Found</h2>');
//     }
//     res.end();
//   })
//   .listen(3000);

// Переадресация
// const http = require('http');

// http
//   .createServer(function(req, res) {
//     res.setHeader('Content-Type', 'text/html; charset=utf-8');

//     if (req.url === '/') {
//       res.statusCode = 302; // временная переадресация на адрес localhost:3000/newpage
//       res.setHeader('Location', '/newpage');
//     } else if (req.url == '/newpage') {
//       res.write('New address');
//     } else {
//       res.statusCode = 404; // адрес не найден
//       res.write('No address found');
//     }
//     res.end();
//   })
//   .listen(3000);

// Отправка файлов
// const http = require('http');
// const fs = require('fs');

// http
//   .createServer(function(req, res) {
//     console.log(`Запрашиваемый адрес: ${req.url}`);
//     // получаем путь после слеша
//     const filePath = req.url.substr(1);
//     // смотрим, есть ли такой файд
//     fs.access(filePath, fs.constants.R_OK, err => {
//       // если произошла ошибка - отправляем статусный код 404
//       if (err) {
//         res.statusCode = 404;
//         res.end('Resource not found');
//       } else {
//         fs.createReadStream(filePath).pipe(res);
//       }
//     });
//   })
//   .listen(3000, function() {
//     console.log('Server started at port 3000 🔥');
//   });

// const http = require('http');
// const fs = require('fs');

// http
//   .createServer(function(req, res) {
//     console.log(`Запрашиваемый адрес: ${req.url}`);
//     // получаем путь после слеша
//     const filePath = req.url.substr(1);
//     fs.readFile(filePath, function(error, data) {
//       if (error) {
//         res.statusCode = 404;
//         res.end('Resource not found');
//       } else {
//         res.end(data);
//       }
//     });
//   })
//   .listen(3000, function() {
//     console.log('Server listening on port 3000 🔥');
//   });

// TODO: Шаблоны
// const http = require('http');
// const fs = require('fs');

// http
//   .createServer(function(req, res) {
//     fs.readFile('index.html', 'utf8', function(err, data) {
//       let message = 'Изучаем Node.js';
//       let header = 'Главная страница';
//       data = data.replace('{header}', header).replace('{message}', message);
//       res.end(data);
//     });
//   })
//   .listen(3000, function() {
//     console.log('Server listening on port 3000 🔥');
//   });
