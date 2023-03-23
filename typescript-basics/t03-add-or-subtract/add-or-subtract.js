// Quiz: "Add or subtract"
// This quiz includes topics from this lesson: "Functions". If you find this quiz difficult, revisiting that lesson may help!
// Write a function that adds or subtracts 1 from a number. Argument 1 is the number. Argument 2 is a boolean. When it's true, add; otherwise, subtract.
function addOrSubtract(n, add) {
    return add ? n + 1 : n - 1;
}
console.log(addOrSubtract(5, true));
console.log(addOrSubtract(5, null));
// console.log(addOrSubtract('5', true))
// console.log(addOrSubtract('5', null))
