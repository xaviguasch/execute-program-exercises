// Quiz: "Generic length"
// This quiz includes topics from these lessons: "Functions", "Generic functions". If you find this quiz difficult, revisiting those lessons may help!
// Write a function length<T> that returns the length of any array. It should be generic, working with any element type.
function lengthFunc(arr) {
    return arr.length;
}
console.log(lengthFunc([]));
console.log(lengthFunc(['a']));
console.log(lengthFunc([1, 2]));
console.log(lengthFunc(['a']));
// console.log(lengthFunc(undefined))
