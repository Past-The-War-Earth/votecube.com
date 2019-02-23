import {get} from '../common/ajax'

var locations

export function loadLocations() {
	if (locations) {
		return new Promise((resolve) => resolve(locations))
	}
	return get(`./data_locations.js`).then(text => {
		// return get(`./data/locations.json`).then(text => {
		locations = JSON.parse(text)

		return locations
	})
}