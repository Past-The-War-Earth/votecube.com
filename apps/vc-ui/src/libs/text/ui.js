import {get}     from '../helpers/ajax'
// import {HASH}    from '../helpers/hash'
import {setText} from './setText'

export var loadUi = async (
	locale
) => {
	// const text = await get(`./assets/text/${locale}/ui${HASH}.json`)
	const text = await get(`./text/${locale}/ui.json`)

	return setText(text)
}
// return get(`./text/${locale}/ui.json`).then(text => setText(store, text))

// switch (locale) {
//     case 'en-us': {
// import('@votecube/text_en-us/lib/ui').then(text => setText(store, text))
// break
// }
// }
