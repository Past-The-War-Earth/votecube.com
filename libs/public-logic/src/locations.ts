import {get} from './ajax'

export interface ILocation {
	// TODO: define
}

let locations: ILocation[]

export async function loadLocations(): Promise<ILocation[]> {
	if (locations) {
		return locations
	}
	const text = await get(`./data_locations.js`)
	// const text = get(`./data/locations.json`)
	locations  = JSON.parse(text)

	return locations
}
