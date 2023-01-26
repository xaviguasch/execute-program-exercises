// Quiz: "Even numbers"
// This quiz includes topics from this lesson: "Filter". If you find this quiz difficult, revisiting that lesson may help!
// Write a function that returns only the even numbers from an array.

// This will require a modulus operator, %. You can think about x % y as "the remainder when dividing x by y." For example, 1 % 2 === 1, 2 % 2 === 0, and 3 % 2 === 1.

// x % 2 === 0 means that a number is even.

const even = (arr) => {
  return arr.filter((num) => num % 2 === 0)
}

console.log(even([1, 2, 3, 4])) // [2,4]
console.log(even([1, 2, 3])) // [2]
console.log(even([2, 4, 6, 8])) // [2,4,6,8]
console.log(even([])) // []
