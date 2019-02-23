import {get}                         from '../common/ajax'
import {loadColors as loadColorText} from './text/colors'

var rawColors

export function loadColors() {
	if (rawColors) {
		return new Promise((resolve) => resolve(
			rawColors
		))
	}

	return get(`./data_colors.js`).then(data => {
		// return get(`./data/colors.json`).then(text => {
		rawColors = JSON.parse(data)

		return rawColors
	})
}

var colors, colorMap

export function getColors() {
	if (colors) {
		return new Promise((resolve) => resolve({
			colors,
			colorMap
		}))
	}

	return Promise.all([
		loadColors(),
		loadColorText('en-us')
	]).then(([
		         rawColors,
		         colorText
	         ]) => {
		colors   = []
		colorMap = {}
		for (let index = 0; index < rawColors.length; index++) {
			const rawColor = rawColors[index]

			const color = {
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
			colors,
			colorMap
		}
	})
}

export function getColorKey(
	color
) {
	return color.red + '-' + color.green + '-' + color.blue
}
