// Quiz: "Generic first with narrowing"
// This quiz includes topics from these lessons: "Functions", "Generic functions", "Conditional narrowing". If you find this quiz difficult, revisiting those lessons may help!
// Write a function first that returns the first element of an array. However, there are two twists. First, it should work for generic arrays, no matter the element type. Second, if we pass a single element, it should return just that element.
function first(el) {
    if (Array.isArray(el)) {
        return el[0];
    }
    else {
        return el;
    }
}
console.log(first([1, 2, 3]));
console.log(first(['a', 'b', 'c']));
console.log(first([true, false]));
console.log(first(1));
console.log(first('a'));
console.log(first(true));
