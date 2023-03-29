// Quiz: "Distinguishing between animals"
// This quiz includes topics from this lesson: "Discriminated unions". If you find this quiz difficult, revisiting that lesson may help!
// Cats and dogs are both animals, but cats meow and dogs bark. Fill in the Cat and Dog type definitions to make the tests pass.

type Cat = { kind: 'cat'; meow: () => string }
type Dog = { kind: 'dog'; bark: () => string }
type Animal = Cat | Dog

// const animal: Animal = {kind: 'cat', meow: () => 'meow'};
// animal.meow();

// const animal: Animal = {kind: 'dog', bark: () => 'woof'};
// animal.bark();

// const animal: Dog = {kind: 'emu', bark: () => 'woof'};
// animal.bark();

// const animal: Dog = {kind: 'dog', meow: () => 'meow'};
// animal.meow();

// const cat: Cat = { kind: 'cat', meow: () => 'meow' }
// const animal = ((): Animal => cat)()
// animal.kind === 'cat' ? animal.meow() : animal.bark()

// const cat: Cat = { kind: 'cat', meow: () => 'nyan' }
// const animal = ((): Animal => cat)()
// animal.kind === 'cat' ? animal.meow() : animal.bark()

// const dog: Dog = { kind: 'dog', bark: () => 'woof' }
// const animal = ((): Animal => dog)()
// animal.kind === 'cat' ? animal.meow() : animal.bark()

// const dog: Dog = { kind: 'dog', bark: () => 'wan wan' }
// const animal = ((): Animal => dog)()
// animal.kind === 'cat' ? animal.meow() : animal.bark()
