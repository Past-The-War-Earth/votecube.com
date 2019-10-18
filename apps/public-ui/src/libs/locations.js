import {get} from '../common/ajax'

var locations

export async function loadLocations() {
	if (locations) {
		return locations
	}
	const text = await get(`./data/locations.json`)
	locations  = JSON.parse(text)

	return locations
}