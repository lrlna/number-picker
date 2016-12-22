var numbers = require('./numbers')()

const Numerals = () => {
  var self = {}

  // given a number, convert to proper lang
  // input, number
  // currentLang, string in form of 'fa', 'ar', 'en'
  self.convertNumbers = (input, currentLang) => {
    // leave number as is if NaN
    if (isNaN(input)) return input

    input = input.toString()
		var numbersInInput = input.match(/[0-9+\.]/gm)
    var languageNumbers = numbers.getNumbers()[currentLang]
    var convertedNumber = numbersInInput.map( (numerals) => languageNumbers[numerals] ).join('')

    return convertedNumber
  }

  return self
}

module.exports = Numerals
