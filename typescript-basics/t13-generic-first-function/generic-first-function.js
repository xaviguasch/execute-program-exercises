// Quiz: "Generic first function"
// This quiz includes topics from these lessons: "Functions", "Generic functions". If you find this quiz difficult, revisiting those lessons may help!
// Write a function first<T> that returns the first element of an array. It should be generic, working with any element type.
function first(arr) {
    return arr[0];
}
console.log(first([1, 2, 3]));
console.log(first(['a', 'b', 'c']));
console.log(first([false, true]));
// console.log(first<number>(['a', 'b']))
// console.log(first<string>('a'))
