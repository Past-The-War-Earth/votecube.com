import {get}           from './ajax'
import {getTextColors} from './text/colors'

let rawColors

export async function getRawColors() {
	if (rawColors) {
		return rawColors
	}

	const data = await get(`./data_colors.js`)
	rawColors  = JSON.parse(data)

	return rawColors
}

export interface IColor {
	blue: number
	green: number
	id?: number
	index?: number
	name?: string
	red: number
}

export interface IColorSet {
	colorMap: { [key: string]: IColor }
	colors: IColor[]
}

let colors: IColor[], colorMap: { [key: string]: IColor }

export async function getColors(): Promise<IColorSet> {
	if (colors) {
		return {
			colorMap,
			colors
		}
	}

	const [
		      theRawColors,
		      colorText
	      ] = await Promise.all([
		getRawColors(),
		getTextColors('en-us')
	])

	colors   = []
	colorMap = {}
	for (let index = 0; index < theRawColors.length; index++) {
		const rawColor = theRawColors[index]

		const color: IColor = {
			blue: rawColor.color[2],
			green: rawColor.color[1],
			index,
			name: colorText[index],
			red: rawColor.color[0]
		}
		colors.push(color)

		const key     = getColorKey(color)
		colorMap[key] = color
	}

	return {
		colorMap,
		colors
	}
}

export function getColorKey(
	color
) {
	return color.red + '-' + color.green + '-' + color.blue
}
