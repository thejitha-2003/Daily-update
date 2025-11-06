//import { add, subtract } from './math.js';
// import *as math from './math.js'

// console.log(add(5, 3));       
// console.log(subtract(10, 4));
// app.js
// const { add, sub } = require('./math.js');

// console.log(add(10, 5)); 
// console.log(sub(10, 5)); 



async function run(tempF) {
  const module = await import('./temperatures.js');
  let celsius = module.toCelsius(tempF);
  console.log(celsius + " Celsius");
}
run(50);