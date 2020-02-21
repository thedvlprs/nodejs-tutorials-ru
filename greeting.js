let currentDate = new Date();
// module.exports.name = 'Alice';
// module.exports.date = currentDate;
global.date = currentDate;

// module.exports.getMessage = function(name) {
//   let hour = currentDate.getHours();
//   if (hour > 16) return 'Good evening, ' + name;
//   else if (hour > 10) return 'Good day, ' + name;
//   else return 'Good morning, ' + name;
// };

module.exports.getMessage = function() {
  let hour = currentDate.getHours();
  if (hour > 16) return 'Good evening, ' + global.name;
  else if (hour > 10) return 'Good day, ' + name;
  else return 'Good morning, ' + name;
};
