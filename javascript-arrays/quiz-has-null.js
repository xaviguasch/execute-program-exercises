// Quiz: "Has null"
// This quiz includes topics from this lesson: "Some and every". If you find this quiz difficult, revisiting that lesson may help!
// Write a function hasNull that returns true if an array contains null.

// A hint: null == undefined (this is a "double equals" comparison). But null !== undefined (this is a "triple equals" comparison).

const hasNull = (arr) => {
  return arr.some((el) => el === null)
}

console.log(hasNull([null, null]))
console.log(hasNull([1, null, 3]))
console.log(hasNull([1, 2, 3]))
