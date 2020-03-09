// Подключение к mysql
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('usersdb2', 'root', '123456', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// Подключение к postgres
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('usersdb2', 'root', '123456', {
//   dialect: 'postgres'
// });

// TODO: Определение моделей
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Sequelize = require('sequelize');
const sequelize = new Sequelize('usersdb', 'root', '123456', {
  dialect: 'mysql',
  host: 'localhost',
  define: {
    timestamps: false
  }
});
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
sequelize
  .sync()
  .then(result => console.log(result))
  .catch(err => console.log(err));
