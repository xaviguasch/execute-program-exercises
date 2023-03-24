// Quiz: "Destructuring with literal objects"
// This quiz includes topics from these lessons: "Functions", "Literal object types". If you find this quiz difficult, revisiting those lessons may help!
// Write the types required to make this function type check. It takes an object with an email property of type string. It should return that email.

function extractEmail({ email }: put_the_type_here): string {
  return email
}

console.log(extractEmail({ email: 'amir@example.com' }))
console.log(extractEmail({ email: 'betty@example.com' }))
console.log(extractEmail({ address: 'cindy@example.com' }))
console.log(extractEmail('dalili@example.com'))
console.log(extractEmail(null))
