import {get}  from './helpers/ajax'
import {HASH} from './helpers/hash'

var locations

export async function loadLocations() {
	if (locations) {
		return locations
	}
	const text = await get(`./assets/data/locations${HASH}.json`)
	locations  = JSON.parse(text)

	return locations
}
