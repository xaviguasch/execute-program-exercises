// Quiz: "Generic identity function"
// This quiz includes topics from these lessons: "Functions", "Generic functions". If you find this quiz difficult, revisiting those lessons may help!
// Write a generic identity function. (An identity function is one that returns its argument without changing it.)

function identity<T>() {
  return
}

console.log(identity(1))
console.log(identity('cat'))
console.log(identity(true))
console.log(identity(undefined))
console.log(identity([1, 2]))
