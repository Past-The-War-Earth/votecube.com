export function getDate(
	date
) {
	if (!date) {
		return 'N/A'
	}

	return `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`
}

export function getLocations(
	locationFormGroupFields
) {
	let continents = locationFormGroupFields.continents.value

	return continents
}

export function getArrayValueTexts(
	arrayValue
) {
	return arrayValue
		.map(
			value => value.text)
		.reduce((
			accumulator,
			text
		) => accumulator + (accumulator
			? ', ' + text
			: text), '')
}

export function getColor(
	color
) {
	if (!color) {
		return `fff`
	}

	const {blue, green, red} = color

	return `${ensure2Digits(red.toString(16))}${ensure2Digits(green.toString(16))}${ensure2Digits(blue.toString(16))}`
}

export function getTextColor(
	color
) {
	const red   = parseInt(color.red)
	const green = parseInt(color.green)
	const blue  = parseInt(color.blue)
	if (red + green + blue > 384) {
		return '000'
	} else if (!red < 10 & blue < 10 && green >= 240) {
		return '000'
	}
	return 'FFF'
}

function ensure2Digits(
	colorString
) {
	return colorString.length === 1 ? '0' + colorString : colorString
}