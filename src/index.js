// @ts-check
/** @typedef { import("./types.js").Animal } Animal */

/** @type {string} */
let foo = 'a'

/**
 *
 *
 * @param {Animal} foo
 * @param {string} bar
 * @returns {string}
 */
let bar = (foo, bar) => 'test'

/**
 *
 *
 * @param {string} test
 * @returns {number}
 */
let biz = test => 123

/** @type {string} */
const b = 'a'

/** @type {Animal} */
let dog = {
  alive: 'b',
  hp: 1,
}

// in-source test suites
if (import.meta.vitest) {
  it('dog is alive', () => {
    expect(dog.alive).toBe(false)
  })
}
