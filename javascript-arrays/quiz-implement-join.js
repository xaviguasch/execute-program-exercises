// Quiz: "Implement Join"
// This quiz includes topics from these lessons: "Reduce", "Join". If you find this quiz difficult, revisiting those lessons may help!
// Using reduce, write a function that behaves like join. Joining [] should produce ''

const join = (arr, separator) => {
  if (arr.length === 0) return ''

  return arr.reduce((acc, currV) => {
    return acc + separator + currV
  })
}

console.log(join(['a'], ',')) // 'a'
console.log(join(['a', 'b'], ',')) // 'a,b'
console.log(join(['a', 'b', 'c'], '')) // 'abc'
console.log(join(['a', 'b', 'c', 'd'], 'x')) // 'axbxcxd'
console.log(join(['a', 'b'], 'COMMA')) // 'aCOMMAb'
console.log(join(['', '', ''], ',')) // ',,'
console.log(join([], ',')) // ''
