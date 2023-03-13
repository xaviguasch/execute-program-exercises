// Quiz: "Implement none"
// This quiz includes topics from this lesson: "Some and every". If you find this quiz difficult, revisiting that lesson may help!
// Write a function none(arr, callback). It should return true if the callback returns false for every element.

const none = (arr, callback) => {
  // it's the same
  // return !arr.some((el) => callback(el))

  return !arr.some(callback)
}

console.log(none([1, 2, 4], (n) => n === 3))
console.log(none([1, 2], (n) => n === 2))
console.log(none(['a', 'bc', 'def'], (s) => s.length === 0))
