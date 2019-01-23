import {setText} from './setText'
import {get} from '../../common/ajax'

export function loadUi(
    store,
    locale
) {
    return get(`./text_${locale}_ui.js`).then(text => setText(store, text))
    // switch (locale) {
    //     case 'en-us': {
    // import('@votecube/text_en-us/lib/ui').then(text => setText(store, text))
    // break
    // }
// }
}