import {get} from '../../common/ajax'

var colorText

export async function loadColors(
	locale
) {
	if (colorText) {
		return colorText
	}

	const text = await get(`./text/${locale}/colors.json`)
	colorText  = JSON.parse(text)

	return colorText
}
