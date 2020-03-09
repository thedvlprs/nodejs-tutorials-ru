// const users = [];

// module.exports = class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   save() {
//     users.push(this);
//   }
//   static getAll() {
//     return users;
//   }
// };

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('User', userScheme);
/* Теперь модель User представляет модель mongoose, которая определяется с помощью схемы userSheme. Поскольку модель mongoose уже автоматически имеет ряд методов для взаимодействия с базой данных, соответственно нам не надо прописывать специальные методы для добавления или получения данных */
