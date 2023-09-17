// Quiz: "Element access"
// This quiz includes topics from this lesson: "Basics". If you find this quiz difficult, revisiting that lesson may help!
// Write a function at(arr, i) that returns the element at index i. The function should return null if the index isn't in the array, for example in at([], 1).

// One way to do this is to compare the requested index against 0 and the array's length.

function at(arr, i) {
  return arr[i]
}

console.log(at([0, 0, 0], 0))
console.log(at([1, 2, 3], 3))
console.log(at([1, 2, 3], 1))
