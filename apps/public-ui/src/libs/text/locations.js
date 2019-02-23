import {get}     from '../../common/ajax'
import {setText} from './setText'

export function loadLocations(
	store,
	locale
) {
	return get(`./text_${locale}_locations.js`).then(text => setText(store, text))
	// return get(`./text/${locale}/locations.json`).then(text => setText(store, text))

	// switch (locale) {
	//     case 'en-us': {
	// import('@votecube/text_en-us/lib/locations').then(text => setText(store, text))
	// break
	// }
	// }
}