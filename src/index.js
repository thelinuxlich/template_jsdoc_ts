// @ts-check
/** @typedef { import("./types.js").Animal } Animal */

/** @type {string} */
let foo = "a"

/**
 *
 *
 * @param {Animal} foo
 * @param {*} bar
 */
let bar = (foo, bar) => "test"

/**
 *
 *
 * @param {*} test
 */
let biz = (test) => 123


/** @type {string} */
const b = "a"


/**
 * @param {*} begin
 * @param {*} end
 */
function calculateDaysBetweenDates(begin, end) { }

/** @type {Animal} */
let dog = {
    alive: "b",
    hp: 1
}

// in-source test suites
if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest
    it('dog is alive', () => {
        expect(dog.alive).toBe(false)
    })
}