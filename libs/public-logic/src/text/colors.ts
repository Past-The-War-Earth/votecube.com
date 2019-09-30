import {get}    from '../ajax'
import {IColor} from '../colors'

let colorText: string[]

export async function getTextColors(
	locale: string
): Promise<string[]> {
	if (colorText) {
		return colorText
	}

	// ./text/${locale}/locations.json
	const text = await get(`./text_${locale}_colors.js`)
	colorText  = JSON.parse(text)

	return colorText
}
