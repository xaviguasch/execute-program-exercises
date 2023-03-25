// Quiz: "Select from tuple"
// This quiz includes topics from these lessons: "Functions", "Arrays", "Tuples", "Type syntax is consistent". If you find this quiz difficult, revisiting those lessons may help!
// Write a function that takes an array of tuples. Each tuple consists of a name (a string) and an age (a number). Your function should return only the names.
// You'll need to use a loop. It can be a regular for loop, a call to .forEach, or a call to .map.
function names(namesAndAges) {
    return namesAndAges.map(function (tuple) { return tuple[0]; });
}
console.log(names([
    ['Amir', 34],
    ['Betty', 17],
]));
console.log(names([
    ['Betty', 17],
    ['Cindy', 26],
    ['Dalili', 82],
    ['Ebony', 10],
]));
// console.log(names([['Ebony', '10']]))
// console.log(names([['Feng', 'Tianwei', 32]]))
