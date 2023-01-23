// Quiz: "All true"
// This quiz includes topics from this lesson: "Reduce". If you find this quiz difficult, revisiting that lesson may help!
// Write a function that returns true if all array elements are true. Use reduce.

// (Mind the difference between JavaScript's == and ===.)

const allTrue = (values) => {
  if (values.length === 0) return true

  return values.reduce((acc, currV) => {
    if (acc === false) return false

    return currV
  }, 0)
}

console.log(allTrue([true])) // true
console.log(allTrue([false])) // false
console.log(allTrue([true, false])) // false
console.log(allTrue([false, true])) // false
console.log(allTrue([false, false])) // false
console.log(allTrue([true, true])) // true
console.log(allTrue([])) // true
