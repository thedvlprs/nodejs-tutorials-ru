const User = require('../models/user');

exports.addUser = function(req, res) {
  // res.send('Добавление пользователя');
  res.render('create.hbs');
};

exports.getUsers = function(req, res) {
  // res.send('Список пользователей');
  res.render('users.hbs', {
    users: User.getAll()
  });
};

exports.postUser = function(req, res) {
  const username = req.body.name;
  const userage = req.body.age;
  const user = new User(username, userage);
  user.save();
  res.redirect('/users');
};

/* Контроллер теперь определяет три метода. Метод addUser() возвращает представление create.hbs для добавления нового пользователя.

Метод postUser() получает отправленные данные, создает объект User и вызывает у него метод save, тем самым сохраняя его в массив users из файла user.js. После добавления идет переадресация на список пользователей.

Метод getUsers() возвращает представление users.hbs, в которое передает список пользователей с помощью вызова метода User.getAll() */
