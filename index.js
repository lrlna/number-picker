var numbers = require('numbers')()

const Numerals = () => {
  var self = {}

  // given a number, convert to proper lang
  self.convertNumbers = (input, currentLang) => {
    if (isNaN(input)) return input

    input = input.toString()
		var numbersInInput = input.match(/[0-9+\.]/gm)

    var languageNumbers = numbers.getNumbers()[currentLang]

    // need to map and return a different thing actually
    numbersInInput.forEach(function(n) {
      input = input.replace(n, languageNumbers[n])
    })

    return input
  }

  return self
}

module.exports = Numerals
