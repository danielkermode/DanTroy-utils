function map (func, arr) {
  arr.forEach(function (val, index) {
    arr[index] = func(val, index, arr)
  })
  return arr
}

module.exports = map
