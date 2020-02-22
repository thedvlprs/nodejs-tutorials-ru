// // подключение модуля Express
// const express = require('express');
// // создаем объект приложения
// const app = express();
// // определяем обработчик для маршрута '/'
// app.get('/', function(req, res) {
//   // отправляем ответ
//   res.send('<h1>Home Page</h1>');
// });
// app.get('/about', function(req, res) {
//   // отправляем ответ
//   res.send('<h1>About Page</h1>');
// });
// app.get('/contacts', function(req, res) {
//   // отправляем ответ
//   res.send('<h1>Contacts Page</h1>');
// });

// // начинаем прослушивать подключение на порту 3000
// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// const express = require('express');

// const app = express();

// app.use(function(req, res, next) {
//   console.log('Middleware 1');
//   next();
// });

// app.use(function(req, res, next) {
//   console.log('Middleware 2');
//   next();
// });

// app.get('/', function(req, res) {
//   console.log('Route /');
//   res.send('Hello');
// });
// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// const express = require('express');
// const app = express();

// app.use(function(request, response) {
//   response.send(`<!DOCTYPE html>
//   <html>
//   <head>
//       <title>Главная</title>
//       <meta charset="utf-8" />
//   </head>
//   <body>
//       <h1>Главная страница</h1>
//       <h3>Привет, Express</h3>
//   </body>
//   <html>`);
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// const express = require('express');
// const app = express();

// app.use(function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// TODO: Static Files
// const express = require('express');

// const app = express();

// app.use(express.static(__dirname + '/public'));

// app.use('/', function(req, res) {
//   res.send('<h1>Home Page</h1>');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// Дополнительно изменяем путь к каталогу статических файлов:
const express = require('express');

const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.use('/', function(req, res) {
  res.send('<h1>Home Page</h1>');
});

app.listen(3000, () => {
  console.log(`Server started on 3000 🔥`);
});

/* 
Теперь чтобы обратиться к файлу about.html, необходимо отправить запрос http://localhost:3000/static/about.html
*/
