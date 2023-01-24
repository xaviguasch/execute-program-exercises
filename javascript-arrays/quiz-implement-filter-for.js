// Quiz: "Implement Filter With For"
// This quiz includes topics from these lessons: "For each", "Filter". If you find this quiz difficult, revisiting those lessons may help!
// Use forEach to write a function that behaves like filter.

const filter = (arr, callback) => {
  const filteredArr = []

  arr.forEach((el) => {
    if (callback(el)) {
      filteredArr.push(el)
    }
  })

  return filteredArr
}

console.log(filter([1, 2, 3], (num) => num >= 0)) // [1,2,3]
console.log(filter([1, 2, 3], (num) => num > 1)) // [2,3]
console.log(filter([1, 2, 3], (num) => num > 5)) // []
console.log(filter([null, undefined], (num) => num >= true)) // [null, undefined]
console.log(filter([], (num) => num >= true)) // []
