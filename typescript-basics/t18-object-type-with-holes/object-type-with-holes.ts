// Quiz: "Object type with holes"
// This quiz includes topics from these lessons: "Functions", "Generic object types". If you find this quiz difficult, revisiting those lessons may help!
// Write a type for Pants. left and right should be able to hold any types.

type Pants = {
  left: string
  right: number
}

let myPants: Pants<string, number> = {
  left: 'phone',
  right: 5,
}
myPants.left

// let myPants: Pants<boolean, boolean> = {
//   left: false,
//   right: true,
// };
// myPants.right;

// let myPants: Pants<number, string> = {
//   left: 5,
//   right: 'phone',
// };
// myPants.left;

// let myPants: Pants = {
//   left: 'phone',
//   right: 'wallet',
// };
// myPants.right;
