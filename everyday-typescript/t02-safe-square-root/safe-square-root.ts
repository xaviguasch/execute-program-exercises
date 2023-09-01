// This quiz includes topics from this lesson: "Error handling with unions". If you find this quiz difficult, revisiting that lesson may help!
// JavaScript and TypeScript both come with a Math.sqrt function for doing square roots. In TypeScript, it only accepts numbers as arguments; its type is Math.sqrt(n: number). However, Math.sqrt doesn't work with negative numbers. For example, Math.sqrt(-1) returns NaN ("not a number").

// Write a safeSqrt function that wraps Math.sqrt, but returns a union type to indicate errors. It should only work for positive numbers and zero. That will force callers to handle the error when the argument is a negative number.

// If the input is negative, your function should return an object with {kind: 'failure'}.
// If the input is positive or zero, it should return an object with {kind: 'success', value: /* computed square root here */}.
// (Note: you can use Number.isNaN(n) if you want to check for whether a number is NaN.)

// >

function safeSqrt(n: number) {
  if (n < 0 || isNaN(n)) {
    return { kind: 'failure' }
  } else {
    return { kind: 'success', value: Math.sqrt(n) }
  }
}

console.log(safeSqrt(0))
console.log(safeSqrt(1))
console.log(safeSqrt(10000))
console.log(safeSqrt(-1))
console.log(safeSqrt(-100))
