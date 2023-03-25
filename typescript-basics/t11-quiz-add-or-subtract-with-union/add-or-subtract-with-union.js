// Quiz: "Add or subtract with union"
// This quiz includes topics from these lessons: "Functions", "Literal types". If you find this quiz difficult, revisiting those lessons may help!
// Write a function that adds 1, subtracts 1, or does nothing to a number. Argument 1 is the number. Argument 2 is 'add', 'subtract', or 'leave-alone'.
function addOrSubtract(n, op) {
    if (op === 'add') {
        return n + 1;
    }
    else if (op === 'subtract') {
        return n - 1;
    }
    else {
        return n;
    }
}
console.log(addOrSubtract(5, 'add'));
console.log(addOrSubtract(5, 'subtract'));
console.log(addOrSubtract(5, 'leave-alone'));
// console.log(addOrSubtract(5, 'increment'))
// console.log(addOrSubtract(5, null))
// console.log(addOrSubtract(5, true))
