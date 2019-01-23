import {get} from '../common/ajax'

export function loadLocations() {
    return get(`./data_locations.js`).then(text => JSON.parse(text))
}