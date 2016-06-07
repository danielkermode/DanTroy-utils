function filter (func, arr) {
  var newArr = []
  arr.forEach(function(val, ind) {
    if(func(val, ind, arr)) newArr.push(val)
  })
  return newArr
}

module.exports = filter
