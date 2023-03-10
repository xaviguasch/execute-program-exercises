// Quiz: "Implement Reverse"
// This quiz includes topics from these lessons: "Reverse", "Reduce right", "Concat". If you find this quiz difficult, revisiting those lessons may help!
// Write the function reverse using reduceRight. A hint: use concat in your reduce callback function.

const reverse = (arr) => {
  // const newArr = []
  // arr.reduceRight((acc, currV) => newArr.push(currV), 0)

  // return newArr

  // MORE OPTIMAL SOLUTION
  return arr.reduceRight((acc, currV) => {
    return acc.concat(currV)
  }, [])
}

console.log(reverse([1])) // 1
console.log(reverse([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]
console.log(reverse(['a', 'b', 'c'])) // ['c', 'b', 'a']
console.log(reverse([])) // []
