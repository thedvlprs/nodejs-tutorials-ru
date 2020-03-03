var operations = require('./operations');

it('should multiply two numbers', function() {
  var expectedResult = 15; // change figures to fail test
  var result = operations.multiply(3, 5);
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

/*
Рассмотрим этот тест. Для тестирования результата применяется функция it(), которая предоставляется фреймворком Mocha.

Эта функция принимает два параметра: текстовое описание тестируемого действия, по которому его можно идентифицировать, и саму тестирующую функцию.

К примеру, нам надо проверить работу выше определенной функции multiply(), которая умножает два числа. Для этого в эту функцию надо передать два числа и сравнить ее результат с ожидаемым. Если результат не совпадает с ожидаемым значением, то генерируется ошибка.
*/

it('should add two numbers', function() {
  var expectedResult = 16;
  var result = operations.add(9, 7);
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it('shoud async multiply two numbers', function(done) {
  var expectedResult = 12;
  operations.multiplyAsync(4, 3, function(result) {
    if (result !== expectedResult) {
      throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
    done();
  });
});

/*
Немного отличается тестирование асинхронных функций.

Особенностью тестирования асинхронных функций является то, что чтобы они завершились до завершения теста, в тестирующую функцию передается функция done(). Причем при окончании тестирования нам надо вызвать эту функцию. Тем самым через подобную функцию Mocha сможет контролировать выполнение теста.

NB: Если мы не передадим функцию done в тест, тогда тест завершится раньше, чем завершится асинхронная функция.
*/
