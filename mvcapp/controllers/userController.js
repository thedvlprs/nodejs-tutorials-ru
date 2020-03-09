// const User = require('../models/user');

// exports.addUser = function(req, res) {
//   // res.send('Добавление пользователя');
//   res.render('create.hbs');
// };

// exports.getUsers = function(req, res) {
//   // res.send('Список пользователей');
//   res.render('users.hbs', {
//     users: User.getAll()
//   });
// };

// exports.postUser = function(req, res) {
//   const username = req.body.name;
//   const userage = req.body.age;
//   const user = new User(username, userage);
//   user.save();
//   res.redirect('/users');
// };

/* Контроллер теперь определяет три метода. Метод addUser() возвращает представление create.hbs для добавления нового пользователя.

Метод postUser() получает отправленные данные, создает объект User и вызывает у него метод save, тем самым сохраняя его в массив users из файла user.js. После добавления идет переадресация на список пользователей.

Метод getUsers() возвращает представление users.hbs, в которое передает список пользователей с помощью вызова метода User.getAll() */

const User = require('../models/user.js');

exports.addUser = function(request, response) {
  response.render('create.hbs');
};
exports.getUsers = function(request, response) {
  User.find({}, function(err, allUsers) {
    if (err) {
      console.log(err);
      return response.sendStatus(400);
    }
    response.render('users.hbs', {
      users: allUsers
    });
  });
};
exports.postUser = function(request, response) {
  if (!request.body) return response.sendStatus(400);
  const userName = request.body.name;
  const userAge = request.body.age;
  const user = new User({ name: userName, age: userAge });

  user.save(function(err) {
    if (err) return console.log(err);
    response.redirect('/users');
  });
};

/* В методе getUsers() вызывается метод User.find(), который получает данные из базы данных и передает их в представление users.hbs.

В методе postUser() из полученных данных создается объект User, и у него вызывается метод save(), который сохраняет объект в бд.
 */
