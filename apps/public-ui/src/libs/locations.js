import {get} from '../common/ajax'

export function loadLocations() {
    return get(`./data/locations.json`).then(text => JSON.parse(text))
}