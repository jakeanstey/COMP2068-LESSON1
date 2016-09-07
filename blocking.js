var fs = require('fs');

var food = fs.readFileSync('food.txt', 'utf-8');
console.log('FOOD:');
console.log(food);

var drinks = fs.readFileSync('drinks.txt', 'utf-8');
console.log('DRINKS:');
console.log(drinks);
