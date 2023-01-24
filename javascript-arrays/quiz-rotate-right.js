// Quiz: "Rotate right"
// This quiz includes topics from these lessons: "Stack", "Shift". If you find this quiz difficult, revisiting those lessons may help!
// Write a rotate function that rotates an array. The last element moves to the beginning of the array. The function should modify the array itself.

// Keep in mind that arrays can be empty (with a .length of 0), which you'll need to handle as a special case. When an array is empty, your rotate function should return an empty array.

const rotate = (arr) => {
  if (arr.length === 0) return arr
  const lastEl = arr.pop()
  arr.unshift(lastEl)
  return arr
}

console.log(rotate([1, 1, 1])) // [1,1,1]
console.log(rotate([0, 0, 1])) // [1,0,0]
console.log(rotate([0, 0, 0])) // [0,0,0]
console.log(rotate([1, 2, 3])) // [3,1,2]
console.log(rotate([1])) // [1]
console.log(rotate([])) // []
console.log(rotate([1, 2, undefined])) //  [undefined, 1, 2]
