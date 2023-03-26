// Quiz: "Generic first function"
// This quiz includes topics from these lessons: "Functions", "Generic functions". If you find this quiz difficult, revisiting those lessons may help!
// Write a function first<T> that returns the first element of an array. It should be generic, working with any element type.

function first<T>(): T {
  return
}

console.log(first<number>([1, 2, 3]))
console.log(first<string>(['a', 'b', 'c']))
console.log(first<boolean>([false, true]))
console.log(first<number>(['a', 'b']))
console.log(first<string>('a'))
