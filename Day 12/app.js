// create Hello World Function

function createHelloWorld() {
  return function (...args) {
    return "Hello World";
  };
}

const helloWorld = createHelloWorld();
console.log(helloWorld()); // Hello World
console.log(helloWorld("hello how")); // Hello  World

// Counter

// function createCounter(n) {
//   return function () {
//     return n++;
//   };
// }

// const counter = createCounter(1);
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
