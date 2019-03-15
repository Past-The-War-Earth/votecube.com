import {DB} from "../database";

export const factorDao = {
	getAll() {
		return new Promise((resolve) => {
			const factors = DB.factors

			resolve(factors)
		})
	}
}
