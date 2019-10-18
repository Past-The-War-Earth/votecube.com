import {get}     from '../../common/ajax'
import {setText} from './setText'

export var loadUi = async (
	store,
	locale
) => {
	const text = await get(`./text/${locale}/ui.json`)

	return setText(store, text)
}
// return get(`./text/${locale}/ui.json`).then(text => setText(store, text))

// switch (locale) {
//     case 'en-us': {
// import('@votecube/text_en-us/lib/ui').then(text => setText(store, text))
// break
// }
// }
