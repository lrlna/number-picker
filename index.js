var numbers = require('./numbers')
var assert = require('assert')

module.exports = function getNumber (input, lang) {
  assert.ok(lang, 'number-picker: should provide language to work with')
  assert.ok(input, 'number-picker: should provide input')
  // leave number as is if NaN
  if (isNaN(input)) return input

  input = input.toString()
  var numInput = input.match(/[0-9+.]/gm)
  var language = numbers(lang)

  return numInput.map(function (num) {
    return language[num]
  }).join('')
}
