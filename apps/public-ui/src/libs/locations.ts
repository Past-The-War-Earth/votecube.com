import { get, HASH } from '@votecube/vc-logic'

var locations

export async function loadLocations() {
	if (locations) {
		return locations
	}
	const text = await get(`./assets/data/locations${HASH}.json`)
	locations = JSON.parse(text as string)

	return locations
}