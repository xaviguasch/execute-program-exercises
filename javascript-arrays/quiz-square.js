// Quiz: "Square"
// This quiz includes topics from this lesson: "Map". If you find this quiz difficult, revisiting that lesson may help!
// Use .map to write a function that squares every number in an array.

function square(nums) {
  return nums.map((n) => n * n)
}

console.log(square([0, 0, 0]))
console.log(square([1, 2, 3]))
