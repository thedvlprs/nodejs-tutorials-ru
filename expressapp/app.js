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
// const express = require('express');

// const app = express();

// app.use('/static', express.static(__dirname + '/public'));

// app.use('/', function(req, res) {
//   res.send('<h1>Home Page</h1>');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

/* 
Теперь чтобы обратиться к файлу about.html, необходимо отправить запрос http://localhost:3000/static/about.html
*/

// TODO: Маршрутизация
// const express = require('express');
// const app = express();

// // обработка запроса по адресу /about
// app.get('/about', function(request, response) {
//   response.send('<h1>О сайте</h1>');
// });

// // обработка запроса по адресу /contact
// app.use('/contact', function(request, response) {
//   response.send('<h1>Контакты</h1>');
// });

// // обработка запроса к корню веб-сайта
// app.get('/', function(request, response) {
//   response.send('<h1>Главная страница</h1>');
// });
// app.listen(3000);

// TODO: Переадресация
// const express = require('express');
// const app = express();

// app.use('/index', function(req, res) {
//   res.redirect('https://github.com/teksavyy/nodejs-tutorials-ru');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// const express = require('express');
// const app = express();

// app.use('/home', function(req, res) {
//   res.redirect('about');
// });

// app.use('/about', function(req, res) {
//   res.send('<h1>About</h1>');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });
/*
По умолчанию при редиректе передается статусный код 302, который указывает, что ресурс временно доступен по новому адресу. Но мы можем указать статусный код 301, чтобы сделать переадресацию постоянной:
response.redirect(301, "/about");
*/

// TODO: Передача данных приложению. Параметры строки запроса (query)
// В express мы можем получить параметра строки запроса через свойство query объекта request, который передается в функцию обработки запроса. Например:

// const express = require('express');

// const app = express();

// app.get('/', function(req, res) {
//   res.send('<h1>Home Page</h1>>');
// });

// app.use('/about', function(req, res) {
//   let id = req.query.id;
//   let userName = req.query.name;
//   res.send(
//     '<h1>Информация</h1><p>id=' + id + '</p><p>name=' + userName + '</p>'
//   );
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// Передача массивов
// Подобным образом мы можем передавать массивы данных:
// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1>');
// });

// app.use('/about', (req, res) => {
//   console.log(req.query);
//   let names = req.query.name;
//   let resText = '<ul>';
//   for (let i = 0; i < names.length; i++) {
//     resText += '<li>' + names[i] + '</li>';
//   }
//   resText += '</ul>';
//   res.send(resText);
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// Передача сложных объектов
// const express = require('express');

// const app = express();

// app.use('/about', (req, res) => {
//   console.log(req.query);
//   let id = req.query.user.id;
//   let name = req.query.user.name;
//   res.send('<h3>id:' + id + '<br>name:' + name + '</h3>');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });
// При передаче в строке запроса свойства объекта помещаются в квадратные скобки: user[id].

// TODO: POST-запросы и отправка форм
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// // создаем парсер для данных application/x-www-form-urlencoded
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get('/register', urlencodedParser, function(req, res) {
//   res.sendFile(__dirname + '/register.html');
// });

// app.post('/register', urlencodedParser, function(req, res) {
//   if (!req.body) return res.sendStatus(400);
//   console.log(req.body);
//   res.send(`${req.body.userName} - ${req.body.userAge}`);
// });

// app.get('/', function(req, res) {
//   res.send('Главная страница');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// TODO: Параметры маршрута
/*
Параметры маршрута представляют именованные сегменты URL-адреса. Не стоит их путать с параметрами строки запроса. Например:
localhost:3000/about/user?id=3&name=Tom

Здесь параметры строки запроса - это то, что идет после вопросительного знака - id=3&name=Tome. Остальная часть, которая идет до вопросительного знака может содержать параметры маршрута.

Название параметра должно включать символы из диапазона [A-Za-z0-9_]. В определении маршрута параметры предваряются знаком двоеточия:
*/
// const express = require('express');
// const app = express();

// app.get('/products/:productId', function(req, res) {
//   res.send('productId: ' + req.params['productId']);
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });
/*
В данном случае параметр называется "productId". Через коллекцию request.params можно получить все параметры и, в частности, значение параметра productId.

Если нам потребуется передать для этого параметра значение, то оно указывается в качестве последнего сегмента в строке запроса:
localhost:3000/products/8
*/

// Мы можем использовать более сложные комбинации параметров:
// const express = require('express');
// const app = express();

// app.get('/categories/:categoryId/products/:productId', function(
//   request,
//   response
// ) {
//   let catId = request.params['categoryId'];
//   let prodId = request.params['productId'];
//   response.send(`Категория: ${catId}  Товар: ${prodId}`);
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });
// http://localhost:3000/categories/smartphone/products/iphone8plus

// TODO: Router
// const express = require('express');
// const app = express();

// app.use('/about', function(req, res) {
//   res.send('О сайте');
// });

// app.use('/products/create', function(req, res) {
//   res.send('Добавление товара');
// });

// app.use('/products/:id', function(req, res) {
//   res.send(`Товар ${req.params.id}`);
// });

// app.use('/products/', function(req, res) {
//   res.send('Список товаров');
// });

// app.use('/', function(req, res) {
//   res.send('Главная страница');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

/*
Здесь у нас есть пять маршрутов, которые обрабатываются различными обработчиками. Но три из этих маршрутов начинаются с "/products" и условно относятся к некоторому функционалу по работе с товарами (просмотр списка товаров, просмотр одного товара по id и добавление товара). Объект Router позволяет связать подобный функционал в одно целое и упростить управление им. Например, перепишем предыдущий пример с использованием объекта Router:
*/

// const express = require('express');
// const app = express();

// // определяем Router
// const productRouter = express.Router();

// // определяем маршруты и их обработчики внутри роутера
// productRouter.use('/create', function(request, response) {
//   response.send('Добавление товара');
// });
// productRouter.use('/:id', function(request, response) {
//   response.send(`Товар ${request.params.id}`);
// });
// productRouter.use('/', function(request, response) {
//   response.send('Список товаров');
// });
// // сопотавляем роутер с конечной точкой "/products"
// app.use('/products', productRouter);

// app.use('/about', function(request, response) {
//   response.send('О сайте');
// });

// app.use('/', function(request, response) {
//   response.send('Главная страница');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

/*
Здесь определен объект productRouter, который обрабатывает все запросы по маршруту "/products". Это главный маршрут. Однако в рамках этого маршрута может быть подмаршрут "/" со своим обработчиком, а также подмаршруты "/:id" и "/create", которые также имеют свои обработчики.
*/

// TODO: JSON и AJAX
const express = require('express');

const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();

app.post('/user', jsonParser, function(req, res) {
  console.log(req.body);
  if (!req.body) return res.sendStatus(400);

  res.json(req.body); // отправляем пришедший ответ обратно
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log(`Server started on 3000 🔥`);
});

/*
Запустим приложение и обратимся к корню веб-сайта. Введем какие-нибудь данные и после отправки в консоли браузера отобразится ответ сервера.
*/
