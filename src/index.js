// @ts-check

/** @type {(foo: Animal) => number} */
let bar = foo => foo.hp

/** @type {Animal} */
let dog = {
  alive: true,
  hp: 1,
}

export default { dog, bar }

// in-source test suites
if (import.meta.vitest) {
  it('dog is alive', () => {
    expect(dog.alive).toBe(true)
  })
}
