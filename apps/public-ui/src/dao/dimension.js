import {DB} from "../database";

export const dimensionDao = {
	getAll() {
		return new Promise((resolve) => {
			const dimensions = DB.dimensions

			resolve(dimensions)
		})
	}
}
