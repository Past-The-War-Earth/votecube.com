import {setText} from './setText'
import {get} from '../../common/ajax'

export function loadLocations(
    store,
    locale
) {
    get(`./text/${locale}/locations.json`).then(text => setText(store, text))
    // switch (locale) {
    //     case 'en-us': {
    // import('@votecube/text_en-us/lib/locations').then(text => setText(store, text))
    // break
    // }
    // }
}