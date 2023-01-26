// Quiz: "Implement compact"
// This quiz includes topics from this lesson: "Filter". If you find this quiz difficult, revisiting that lesson may help!
// Write a function compact that removes all nulls from an array. It should return an array of all non-null values from the original array.

// Watch out for the difference between == and ===. == is "double equals", a loose comparison. === is "triple equals", a strict comparison.

const compact = (arr) => {
  return arr.filter((el) => el !== null)
}

console.log(compact([null])) // []
console.log(compact([1, 2, 3])) // [1,2,3]
console.log(compact([1, null, 2, 3, null])) // [1,2,3]
console.log(compact([])) // []
console.log(compact([undefined])) // [undefined]
console.log(compact([false, undefined])) // [false, undefined]
