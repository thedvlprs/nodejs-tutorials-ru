// TODO: Создание API
/*
Используя Express и Node.js, мы можем реализовать полноценный API в стиле REST для взаимодействия с пользователем. Архитектура REST предполагает применение следующих методов или типов запросов HTTP для взаимодействия с сервером:

GET

POST

PUT

DELETE

Зачастую REST-стиль особенно удобен при создании всякого рода Single Page Application, которые нередко используют специальные javascript-фреймворки типа Angular, React или Knockout.
*/
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + '/public'));
// получение списка данных
app.get('/api/users', function(req, res) {
  var content = fs.readFileSync('users.json', 'utf8');
  var users = JSON.parse(content);
  res.send(users);
});
// получение одного пользователя по id
app.get('/api/users/:id', function(req, res) {
  var id = req.params.id; // получаем id
  var content = fs.readFileSync('users.json', 'utf8');
  var users = JSON.parse(content);
  var user = null;
  // находим в массиве пользователя по id
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      user = users[i];
      break;
    }
  }
  // отправляем пользователя
  if (user) {
    res.send(user);
  } else {
    res.status(404).send();
  }
});
// получение отправленных данных
app.post('/api/users', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);

  var userName = req.body.name;
  var userSeat = req.body.seat;
  var user = { name: userName, seat: userSeat };

  var data = fs.readFileSync('users.json', 'utf8');
  var users = JSON.parse(data);

  // находим максимальный id
  var id = Math.max.apply(
    Math,
    users.map(function(o) {
      return o.id;
    })
  );
  // увеличиваем его на единицу
  user.id = id + 1;
  // добавляем пользователя в массив
  users.push(user);
  var data = JSON.stringify(users);
  // перезаписываем файл с новыми данными
  fs.writeFileSync('users.json', data);
  res.send(user);
});
// удаление пользователя по id
app.delete('/api/users/:id', function(req, res) {
  var id = req.params.id;
  var data = fs.readFileSync('users.json', 'utf8');
  var users = JSON.parse(data);
  var index = -1;
  // находим индекс пользователя в массиве
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      index = i;
      break;
    }
  }
  if (index > -1) {
    // удаляем пользователя из массива по индексу
    var user = users.splice(index, 1)[0];
    var data = JSON.stringify(users);
    fs.writeFileSync('users.json', data);
    // отправляем удаленного пользователя
    res.send(user);
  } else {
    res.status(404).send();
  }
});
// изменение пользователя
app.put('/api/users', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);

  var userId = req.body.id;
  var userName = req.body.name;
  var userSeat = req.body.seat;

  var data = fs.readFileSync('users.json', 'utf8');
  var users = JSON.parse(data);
  var user;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      user = users[i];
      break;
    }
  }
  // изменяем данные у пользователя
  if (user) {
    user.seat = userSeat;
    user.name = userName;
    var data = JSON.stringify(users);
    fs.writeFileSync('users.json', data);
    res.send(user);
  } else {
    res.status(404).send(user);
  }
});

app.listen(3000, function() {
  console.log('Сервер ожидает подключения...');
});

/* Для обработки запросов определено пять методов для каждого типа запросов: app.get()/app.post()/app.delete()/app.put() 

В качестве результата обработки мы должны отправить массив пользователей, которые считываем из файла. Для упрощения кода приложения в рамкаха данного экспериментального проекта для чтения/записи файла применяются синхронные методы fs.readFileSync()/fs.writeFileSync(). Но в реальности, как правило, работа с данными будет идти через базу данных, а далее мы все это рассмотрим на примере MongoDB.

И чтобы получить данные из файла с помощью метода fs.readFileSync() считываем данные в строку, которую парсим в массив объектов с помощью функции JSON.parse(). И в конце полученные данные отправляем клиенту методом res.send().
*/

// Express для хранения статических файлов использует папку public c index.html, который будет выполнять роль клиента
