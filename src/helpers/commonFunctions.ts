export const getRandom = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min)
}

export const createPrice = (price: number) => {
	const preparedPriceArray = price.toString().split('')
	preparedPriceArray.reverse()
	let preparedPrice = ''

	for (let i = 0; i <= preparedPriceArray.length - 1; i++) {
		if ((i + 1) % 3 === 0) {
			preparedPrice += preparedPriceArray[i] + ' '
		} else {
			preparedPrice += preparedPriceArray[i]
		}
	}

	preparedPrice = preparedPrice.split('').reverse().join('')
	return preparedPrice
}
