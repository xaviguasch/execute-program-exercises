// Quiz: "Implement uniq"
// This quiz includes topics from these lessons: "For each", "Includes", "Stack". If you find this quiz difficult, revisiting those lessons may help!
// Write a function uniq(arr). It should return a new array without any duplicate values. It should not change the original array.

function uniq(arr) {
  const newArr = []
  arr.forEach((e) => {
    if (!newArr.includes(e)) {
      newArr.push(e)
    }
  })
  return newArr
}

console.log(uniq([1, 2, 3]))
console.log(uniq(['a', 'a', 'b']))
console.log(uniq([1, 1, 1, 1]))
