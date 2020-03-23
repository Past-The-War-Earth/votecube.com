import {get}  from './helpers/ajax'
// import {HASH} from './helpers/hash'

var locations

export async function loadLocations() {
	if (locations) {
		return locations
	}
	// const text = await get(`./assets/data/locations${HASH}.json`)
	const text = await get(`./data/locations.json`)
	locations  = JSON.parse(text)

	return locations
}
