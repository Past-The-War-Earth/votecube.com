import {get}     from '../../common/ajax'
import {HASH}    from '../../helpers/hash'
import {setText} from './setText'

export var loadLocations = async (
	locale: string
) => {
	const text = await get(`./assets/text/${locale}/locations${HASH}.json`)

	return setText(text as string)
}
// switch (locale) {
//     case 'en-us': {
// import('@votecube/text_en-us/lib/locations').then(text => setText(store, text))
// break
// }
// }
