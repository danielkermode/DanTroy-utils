var assert = require('./assert')
var utils = require('miles-utils/lib/utils')
var data = require('../data/data')
var expectedArrayOfArrays = require('../data/array-of-arrays')
var expectedFormattedDates = require('../data/formatted-dates')
var meaningOfLife = '42'

function each (func, arr) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}

/*
 * getType
 */

function getType (thing) {
  return typeof thing
}

/*
 * isNumber
 */

function isNumber (thing) {
  return typeof thing === 'number'
}


/*
 * isStringNumber
 */

function isStringNumber (str) {
  return !isNaN(parseInt(str))
}

/*
 * toNumber
 */

function toNumber (str) {
  return parseInt(str)
}

/*
 * add
 */

function add (a, b) {
  return a + b
}


/*
 * addStrings
 */

function addStrings (a, b) {
  var result = parseInt(a) + parseInt(b)
  return result.toString()
}

/*
 * addStringsOrNumbers
 */

function addStringsOrNumbers (a, b) {
  if (isNumber(a) && isNumber(b)) return add(a,b)
  return addStrings(a,b)
}

/*
 * isEmail
 */

function isEmail (str) {
  var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i
  return regex.test(str)
}

/*
 * countIf
 */


var isString = function (s) {
  return typeof s === 'string'
}
var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
var expectedNumberCount = 4 // do you know which 4 are numbers?
var expectedStringCount = 2
var numberCount = utils.countIf(isNumber, mixedArray)
var stringCount = utils.countIf(isString, mixedArray)

assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array')
assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')

/*
 * filter
 */



var emails = utils.filter(isEmail, data)
assert(emails.length, 44, 'filter and isEmail returns the correct number of emails')

/*
 * map
 */



var someNumbers = [2, 4, 6]
var expectedNumbers = [4, 8, 12]
var timesTwo = function (num) {
  return num * 2
}
var actualNumbers = utils.map(timesTwo, someNumbers)
for (var i = 0; i < expectedNumbers.length; i++) {
  assert(expectedNumbers[i], actualNumbers[i], 'number mapped correctly')
}

/*
 * filterStringsWithCommas
 */

function filterStringsWithCommas (str) {
  return str.includes(',')
}

var stringsWithCommas = utils.filter(filterStringsWithCommas, data)
assert(stringsWithCommas.length, 62, 'filter and filterStringsWithCommas returns the correct number of commas')

/*
 * splitStringByCommas
 */

function splitStringByCommas (str) {
  return str.split(',')
}

var arrayOfArrays = utils.map(splitStringByCommas, stringsWithCommas)
var matchesArrayOfArrays = arrayOfArrays.every(function (arr, i) {
  return arr.every(function (str, j) {
    return str === expectedArrayOfArrays[i][j]
  })
})
