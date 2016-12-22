function numbers() {
  return {
    en: getenNumbers(),
    fa: getfaNumbers(),
    ar: getarNumbers()
  }
}

function getenNumbers () {
  return {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0',
    '.': '.'
  }
}

function getarNumbers () {
	return {
		'1': '۱',
		'2': '۲',
		'3': '۳',
		'4': '٤',
		'5': '٥',
		'6': '٦',
		'7': '۷',
		'8': '۸',
		'9': '۹',
		'0': '۰',
		'.': '/'
	}
}

function getfaNumbers () {
	return {
		'1': '۱',
		'2': '۲',
		'3': '۳',
		'4': '۴',
		'5': '۵',
		'6': '۶',
		'7': '۷',
		'8': '۸',
		'9': '۹',
		'0': '۰',
		'.': '/'
	}
}