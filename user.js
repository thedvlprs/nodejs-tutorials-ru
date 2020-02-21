function User(name, age) {
  this.name = name;
  this.age = age;
  this.displayInfo = function() {
    console.log(`Имя: ${this.name} Возраст: ${this.age}`);
  };

  User.prototype.sayHi = function() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  };
}

module.exports = User;
