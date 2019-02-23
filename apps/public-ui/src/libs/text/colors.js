import {get} from '../../common/ajax'

var colorText

export function loadColors(
	locale
) {
	if (colorText) {
		return new Promise((resolve) => resolve(
			colorText
		))
	}

	// ./text/${locale}/locations.json
	return get(`./text_${locale}_colors.js`).then(text => {
		colorText = JSON.parse(text)

		return colorText
	})
}
