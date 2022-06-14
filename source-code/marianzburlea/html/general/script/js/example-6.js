/**
 * addTwoNumbers
 * @param {number} m a random number you can think of
 * @param {number} n another random number that comes to mind
 * @returns the sum of m and n
 */
const addTwoNumbers = (m, n) => {
  if (m && n) {
    return `The sum of ${m} and ${n} is equal to: ${m + n}`
  } else {
    return 'We need two number to sum them up.'
  }
}
