// Quiz: "Implement find"
// This quiz includes topics from these lessons: "Find index", "Find", "Negative array indexes". If you find this quiz difficult, revisiting those lessons may help!
// Use findIndex to write the function find(arr, callback). It should return the first element where callback(element) is true. If the element is not found, it should return undefined.

const find = (arr, callback) => {
  const index = arr.findIndex(callback)

  // to avoid negative index edge case
  if (index === -1) return undefined

  return arr[index]
}

console.log(find([1, 2, 3], (n) => n === 1)) // 1
console.log(find([5, 6, 7], (n) => n / 2 === 3)) // 6
console.log(find([1, 2, 3], (n) => n > 5)) // undefined
console.log(find([], (n) => n > 5)) // undefined
console.log(find([null], (n) => n === null)) // null
