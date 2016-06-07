function countIf (testFunc, arr) {
  if (!(arr instanceof Array)) return 0
  return arr.filter(testFunc).length
}

module.exports = countIf
