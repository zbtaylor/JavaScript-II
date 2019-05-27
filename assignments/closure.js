// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const myHobby = "Cycling";

const yell = () => {
  console.log(`${myHobby} is a blast! But also a money pit...`);
}

yell();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  count++;
  return count;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
// console.log(counter());
// console.log(counter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    }
  }
};

let newCounter = counterFactory();
console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.decrement());

