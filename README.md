# NUMERALS

Given an [arabic numeral](https://en.wikipedia.org/wiki/Arabic_numerals) (1, 2, 3, 4 ...) get a [hindu-arabic numeral](https://en.wikipedia.org/wiki/Hindu%E2%80%93Arabic_numeral_system) back. Works with farsi and arabic umbers :sparkles:. 

# Usage

`convertNumbers` takes two arguments: `input` number, and `currentLang`, or the language you would like to convert into. 

`currentLang` has three options: `fa`, `ar`, `en`

Example:
```javascript
var numerals = require('numerals')()

// returns ۴۵
numerals.convertNumber(45, 'fa')
```
