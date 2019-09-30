import {get} from '../ajax'

export async function loadUi(
	store,
	locale
): Promise<{ [key: string]: string }> {
	const text = await get(`./text_${locale}_ui.js`)

	return JSON.parse(text)
	// return setText(store, text)

	// return get(`./text/${locale}/ui.json`).then(text => setText(store, text))

	// switch (locale) {
	//     case 'en-us': {
	// import('@votecube/text_en-us/lib/ui').then(text => setText(store, text))
	// break
	// }
// }
}
