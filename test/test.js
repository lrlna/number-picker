var test = require('tape')
var numbers = require('../index.js')

test('test equality of 45', function(t){
	t.equal(numbers(45, 'en'), '45')
	t.equal(numbers(-45, 'en'), '45')
	t.equal(numbers(4.5, 'en'), '4.5')
	t.equal(numbers(-4.5, 'en'), '4.5')
	t.equal(numbers(45, 'fa'), '۴۵')
	t.equal(numbers(-45, 'fa'), '۴۵')
	t.equal(numbers(4.5, 'fa'), '۴/۵')
	t.equal(numbers(-4.5, 'fa'), '۴/۵')
	t.equal(numbers(46, 'ar'), '٤٦')
	t.equal(numbers(-46, 'ar'), '٤٦')
	t.equal(numbers(-4.6, 'ar'), '٤/٦')
	t.equal(numbers(4.6, 'ar'), '٤/٦')
	t.equal(numbers(Infinity, 'en'), Infinity)
	t.equal(numbers(-Infinity, 'en'), Infinity)
	t.end()
})
