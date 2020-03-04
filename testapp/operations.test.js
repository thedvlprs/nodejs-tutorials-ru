// TODO: Mocha

// var operations = require('./operations');

// it('should multiply two numbers', function() {
//   var expectedResult = 15; // change figures to fail test
//   var result = operations.multiply(3, 5);
//   if (result !== expectedResult) {
//     throw new Error(`Expected ${expectedResult}, but got ${result}`);
//   }
// });

/*
Рассмотрим этот тест. Для тестирования результата применяется функция it(), которая предоставляется фреймворком Mocha.

Эта функция принимает два параметра: текстовое описание тестируемого действия, по которому его можно идентифицировать, и саму тестирующую функцию.

К примеру, нам надо проверить работу выше определенной функции multiply(), которая умножает два числа. Для этого в эту функцию надо передать два числа и сравнить ее результат с ожидаемым. Если результат не совпадает с ожидаемым значением, то генерируется ошибка.
*/

// it('should add two numbers', function() {
//   var expectedResult = 16;
//   var result = operations.add(9, 7);
//   if (result !== expectedResult) {
//     throw new Error(`Expected ${expectedResult}, but got ${result}`);
//   }
// });

// it('shoud async multiply two numbers', function(done) {
//   var expectedResult = 12;
//   operations.multiplyAsync(4, 3, function(result) {
//     if (result !== expectedResult) {
//       throw new Error(`Expected ${expectedResult}, but got ${result}`);
//     }
//     done();
//   });
// });

/*
Немного отличается тестирование асинхронных функций.

Особенностью тестирования асинхронных функций является то, что чтобы они завершились до завершения теста, в тестирующую функцию передается функция done(). Причем при окончании тестирования нам надо вызвать эту функцию. Тем самым через подобную функцию Mocha сможет контролировать выполнение теста.

NB: Если мы не передадим функцию done в тест, тогда тест завершится раньше, чем завершится асинхронная функция.
*/

// TODO:: Assert
/*
В предыдущей теме для верификации результата теста полученное значение сравнивалось с ожидаемым результатом: 

if(result!==expectedResult){
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
}

Подобное сравнение является довольно тривиальным и фактически используется во многих тестах с небольшими изменениями. И специально чтобы упростить верификацию результатов в тестах для Node.js был создан специальный модуль - assert. Кроме того, есть различные библиотеки, которые еще называют Assertions и которые служат той же цели: should.js, expect.js и т.д. Но в данном случае мы рассмотрим работу с модулем Assert.

equal
Функция assert.equal() сравнивает два значения. Если они не равны, то генерируется ошибка. 
*/

var assert = require('assert');
var operations = require('./operations');

it('should multiply two numbers', function() {
  var expected = 15;
  var result = operations.multiply(3, 5);
  assert.equal(result, expected);
});

/* Если оба значения будут равны, то мы опять же увидим в консоли, что тесты пройдены. Если же значения не будут равны, то мы увидим красные маркеры с сообщениями об ошибке */

/* В противоположность этой функции функция assert.notEqual() генерирует ошибку, если оба значения равны: */
it('should multiply two numbers', function() {
  var expected = 15;
  var result = operations.multiply(3, 5);
  assert.notEqual(result, expected);
});
