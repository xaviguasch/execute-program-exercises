// Quiz: "Apply function"
// This quiz includes topics from this lesson: "Functions as arguments". If you find this quiz difficult, revisiting that lesson may help!
// Write a function applyFunction that takes two arguments. The first argument is a function f, which itself takes a number and returns a number. The second argument to applyFunction is a number, x. applyFunction should return f(x). We've provided the function body, but the argument types are missing.

function applyFunction(f, x) {
  return f(x)
}

console.log(applyFunction((n) => n + 1, 2))
console.log(applyFunction((n) => n * 10, 3))
