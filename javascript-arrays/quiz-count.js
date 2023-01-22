// This quiz includes topics from this lesson: "For each". If you find this quiz difficult, revisiting that lesson may help!
// Use forEach to write a function count(arr, callback). It should return the number of elements for which callback is true.

function count(arr, callback) {
  let count = 0

  arr.forEach((el, idx) => {
    if (callback(el)) {
      count++
    }
  })
  return count
}

console.log(count([1, 2, 3, 4], (e) => e === 3))
console.log(count([1, 2, 3, 4], (e) => e > 1))
console.log(count([2, 1, 4, 5, 2, 8], (e) => e === 2))
console.log(count(['a', 'b'], (e) => e === 'd'))
console.log(count([], (e) => e === 'd'))
console.log(count.toString().includes('forEach'))
