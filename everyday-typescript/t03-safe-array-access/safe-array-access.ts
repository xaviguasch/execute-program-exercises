// Quiz: "Safe array access"
// This quiz includes topics from this lesson: "Error handling with unions". If you find this quiz difficult, revisiting that lesson may help!
// If we have an array const x = [1, 2, 3], doing x[3] will return undefined. This is usually a bug.

// Write a safe function elemAt<T> that acts like a simple arr[i], but returns a union type to indicate errors. It should be generic, working with any element type. Some criteria (all of which are also written as tests below):

// If the array is empty, return {kind: 'failure', reason: 'array is empty'}.
// If the index is outside of the array's bounds, return {kind: 'failure', reason: 'no element at that index'}.
// Otherwise, return {kind: 'success', value: /* element at index i */}.

function elemAt<T>() {}

console.log(elemAt([0, 0, 0], 0))
console.log(elemAt([1, 2, 3], 1))
console.log(elemAt(['a', 'b', 'c'], 2))
