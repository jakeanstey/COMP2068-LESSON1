var fs = require('fs');

var food = fs.readFile('food.txt', 'utf-8', function(err, food){
  console.log(food);
});

console.log('FOOD::');

var drinks = fs.readFile('drinks.txt', 'utf-8', function(err, drinks){
  console.log('DRINKS:');
  console.log(drinks);
});
