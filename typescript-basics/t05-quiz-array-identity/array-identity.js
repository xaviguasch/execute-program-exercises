// Quiz: "Array identity"
// This quiz includes topics from these lessons: "Functions", "Arrays". If you find this quiz difficult, revisiting those lessons may help!
// Write a function that takes an array of numbers, then returns it. It shouldn't change the array in any way. Force the array to contain numbers, so that other types of arrays are type errors.
function f(nums) {
    return nums;
}
console.log(f([]));
console.log(f([1]));
console.log(f());
// console.log(f(['1']))
// console.log(f(null))
// console.log(f(undefined))
