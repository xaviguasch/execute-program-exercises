// Quiz: "Stringify"
// This quiz includes topics from these lessons: "Functions", "Type unions", "Return type inference". If you find this quiz difficult, revisiting those lessons may help!
// Write a function that returns its argument as a string. It should take a string, a number, or a boolean and return a string. (Remember that .toString() works on these types)
function stringify(input) {
    return input.toString();
}
console.log(stringify('hello'));
console.log(stringify(5));
console.log(stringify(false));
console.log(stringify(null));
// console.log(stringify({ email: 'a@example.com' }))
