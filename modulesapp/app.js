// // получаем модуль Express
// const express = require('express');

// // создаем приложение
// const app = express();

// const port = 3000;

// // устанавливаем обработчик для маршрута '/'
// app.get('/', (req, res) => {
//   res.end('<h1>Hello from Express!</h1>');
// });

// // начинаем прослушивание подключений на порту 3000
// app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

let name = process.argv[2];
let age = process.argv[3];

console.log('name: ' + name);
console.log('age: ' + age);
