// Quiz: "Has logged in"
// This quiz includes topics from these lessons: "Functions", "Conditional narrowing", "Literal types". If you find this quiz difficult, revisiting those lessons may help!
// Write a function that decides whether a user has logged in. Sometimes, it's called with a number of times that the user has logged in. Other times, it's called with true. It's never called with false.
function hasLoggedIn(action) {
    if (typeof action === 'number' && action > 0) {
        return true;
    }
    else if (action === true) {
        return true;
    }
    else {
        return false;
    }
}
// alternative solution
// function hasLoggedIn(times: number | true) {
//   return (typeof times === 'boolean') ? true : times > 0;
// }
console.log(hasLoggedIn(true));
console.log(hasLoggedIn(0));
console.log(hasLoggedIn(1));
console.log(hasLoggedIn(5));
// console.log(hasLoggedIn(-1))
// console.log(hasLoggedIn(false))
// console.log(hasLoggedIn(undefined))
