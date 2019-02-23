import {get}     from '../../common/ajax'
import {setText} from './setText'

export function loadUi(
	store,
	locale
) {
	return get(`./text_${locale}_ui.js`).then(text => setText(store, text))
	// return get(`./text/${locale}/ui.json`).then(text => setText(store, text))

	// switch (locale) {
	//     case 'en-us': {
	// import('@votecube/text_en-us/lib/ui').then(text => setText(store, text))
	// break
	// }
// }
}