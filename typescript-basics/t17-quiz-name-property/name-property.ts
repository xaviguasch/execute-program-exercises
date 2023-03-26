// Quiz: "Name property"
// This quiz includes topics from these lessons: "Functions", "Object narrowing". If you find this quiz difficult, revisiting those lessons may help!
// Write a function that returns the name of an object. It should work for any object with a name: string property.

function getName({ name }: { name: string }): string {
  return name
}

const amir = { name: 'Amir', admin: true }
console.log(getName(amir))

const company = { name: 'My Awesome Company', companyType: 'LLC' }
console.log(getName(company))

// console.log(getName({ notAName: 'oh no' }))
// console.log(getName(null))
