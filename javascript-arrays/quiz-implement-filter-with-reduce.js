// Quiz: "Implement Filter With Reduce"
// This quiz includes topics from these lessons: "Reduce", "Filter", "Concat". If you find this quiz difficult, revisiting those lessons may help!
// Use reduce to write a function that behaves like filter. You can do this with only one reduce and no other loops.

// Two tips:

// Remember to return acc inside your reduce callback.
// Remember to pass an initial value of [] as reduce's second argument.

const filter = (arr, callback) => {
  return arr.reduce((acc, currV) => {
    if (callback(currV)) {
      return acc.concat(currV)
    } else {
      return acc
    }
  }, [])
}

console.log(filter([1, 2, 3], (num) => num >= 0)) // [1,2,3]
console.log(filter([1, 2, 3], (num) => num > 1)) // [2,3]
console.log(filter([1, 2, 3], (num) => num > 5)) // []
console.log(filter([null, undefined], (num) => true)) // [null, undefined]
console.log(filter([], (num) => true)) // []
