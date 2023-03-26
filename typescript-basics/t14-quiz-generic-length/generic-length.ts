// Quiz: "Generic length"
// This quiz includes topics from these lessons: "Functions", "Generic functions". If you find this quiz difficult, revisiting those lessons may help!
// Write a function length<T> that returns the length of any array. It should be generic, working with any element type.

function length<T>(): number {
  return
}

console.log(length([]))
console.log(length(['a']))
console.log(length([1, 2]))
console.log(length(['a']))
console.log(length(undefined))
