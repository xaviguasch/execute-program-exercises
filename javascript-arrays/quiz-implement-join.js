// Quiz: "Implement Join"
// This quiz includes topics from these lessons: "Reduce", "Join". If you find this quiz difficult, revisiting those lessons may help!
// Using reduce, write a function that behaves like join. Joining [] should produce ''

const join = (arr, separator) => {
  return
}

console.log(join(['a'], ',')) // 'a'
console.log(join(['a', 'b'], ',')) // 'a,b'
console.log(join(['a', 'b', 'c'], '')) // 'abc'
console.log(join(['a', 'b', 'c', 'd'], 'x')) // 'axbxcxd'
console.log(join(['a', 'b'], 'COMMA')) // 'aCOMMAb'
console.log(join(['', '', ''], ',')) // ',,'
console.log(join([], ',')) // ''
