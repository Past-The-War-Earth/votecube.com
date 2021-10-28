import {get}  from '../../common/ajax'
import {HASH} from '../../helpers/hash'

var colorText

export async function loadColors(
	locale: string
) {
	if (colorText) {
		return colorText
	}

	const text = await get(`./assets/text/${locale}/colors${HASH}.json`)
	colorText  = JSON.parse(text as string)

	return colorText
}
