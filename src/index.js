// @ts-check
/** @typedef { import("./types.js").Animal } Animal */

/**
 * @param {Animal} foo
 * @param {string} bar
 * @returns {string}
 */
let bar = (foo, bar) => 'test'

/** @type {Animal} */
let dog = {
  alive: true,
  hp: 1,
}

export default dog

// in-source test suites
if (import.meta.vitest) {
  it('dog is alive', () => {
    expect(dog.alive).toBe(true)
  })
}
