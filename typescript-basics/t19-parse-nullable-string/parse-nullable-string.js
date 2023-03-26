// Quiz: "Parse nullable string"
// This quiz includes topics from these lessons: "Functions", "Nullability", "Conditional narrowing". If you find this quiz difficult, revisiting those lessons may help!
// Write a function that turns a string | undefined into a number.
// If the argument was undefined, the function should return undefined.
// If the argument was a string containing a valid number, it should return that number.
// If the argument was a string without a number, it should return undefined.
// (You'll want to use the built-in functions parseInt(s: string) and isNaN(n: number).)
function maybeParseString(el) {
    if (el === undefined) {
        return undefined;
    }
    var parsedEl = parseInt(el, 10);
    if (isNaN(parsedEl)) {
        return undefined;
    }
    else {
        return parsedEl;
    }
}
console.log(maybeParseString(undefined));
console.log(maybeParseString('3'));
console.log(maybeParseString('2701'));
console.log(maybeParseString('junk'));
console.log(maybeParseString('not-a-number'));
// console.log(maybeParseString(null))
// console.log(maybeParseString(3))
