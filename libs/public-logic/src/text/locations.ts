import {get} from '../ajax'

export async function getTextLocations(
	locale: string
): Promise<{ [key: string]: string }> {
	const text = await get(`./text_${locale}_locations.js`)
	return JSON.parse(text)

	// return get(`./text/${locale}/locations.json`).then(text => setText(store, text))

	// switch (locale) {
	//     case 'en-us': {
	// import('@votecube/text_en-us/lib/locations').then(text => setText(store, text))
	// break
	// }
	// }
}