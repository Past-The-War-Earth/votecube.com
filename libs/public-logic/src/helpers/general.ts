import {IContinent} from '../../../model/src'
import {
	IColor
}                   from '../colors'

export function getDate(
	date: Date
): string {
	if (!date) {
		return 'N/A'
	}

	return `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`
}

export function getLocations(
	locationFormGroupFields
): IContinent[] {
	return locationFormGroupFields.continents.value
}

export function getArrayValueTexts(
	arrayValue: any[]
): string {
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

export function getColorHexString(
	color: IColor
): string {
	if (!color) {
		return `fff`
	}

	const rgb = color.id

	const {blue, green, red} = getRGB(color)

	return `${ensure2Digits(red.toString(16))}${ensure2Digits(green.toString(16))}${ensure2Digits(blue.toString(16))}`
}

export function getRGB(
	color: IColor
): IColor {
	const rgb = color.id

	return {
		blue: rgb % 256,
		green: (rgb >> 8) % 256,
		red: rgb >> 16
	}
}

function ensure2Digits(
	colorString: string
): string {
	return colorString.length === 1 ? '0' + colorString : colorString
}
