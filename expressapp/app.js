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

const express = require('express');

const app = express();

app.use(function(req, res, next) {
  console.log('Middleware 1');
  next();
});

app.use(function(req, res, next) {
  console.log('Middleware 2');
  next();
});

app.get('/', function(req, res) {
  console.log('Route /');
  res.send('Hello');
});
app.listen(3000, () => {
  console.log(`Server started on 3000 🔥`);
});
