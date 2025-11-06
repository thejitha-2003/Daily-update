
import { sayHello } from './a.js';
console.log("Inside b.js");
export function sayHi() {
  console.log("Hi from B");
}
sayHello();