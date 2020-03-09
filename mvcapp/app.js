// const express = require('express');
// const app = express();
// const userController = require('./controllers/userController');
// const homeController = require('./controllers/homeController');

// // определяем Router (роутеры)
// const userRouter = express.Router(); // для адресов с '/users'
// const homeRouter = express.Router();

// // определяем маршруты и их обработчики внутри роутера userRouter
// userRouter.use('/create', userController.addUser);
// userRouter.use('/', userController.getUsers);
// app.use('/users', userRouter);

// // определяем маршруты и их обработчики внутри роутера homeRouter
// homeRouter.get('/about', homeController.about);
// homeRouter.get('/', homeController.index);
// app.use('/', homeRouter);

// // обработка ошибки 404
// app.use(function(req, res, next) {
//   res.status(404).send('Not Found');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const homeRouter = require('./routes/homeRouter');

app.use('/users', userRouter);
app.use('/', homeRouter);

app.use(function(req, res, next) {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log(`Server started on 3000 🔥`);
});
/* Таким образом, за счет выноса логики обработки маршрутов и организации маршрутов в роутеры в отдельные модули общий код приложения стал проще и яснее.*/
