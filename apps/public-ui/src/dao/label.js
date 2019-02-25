import {DB} from "../database";

const labelMap = {}

export const labelDao = {

	getAll() {
		return new Promise(resolve => {
			resolve(DB.labels.map(label => {
				if (labelMap[label.id]) {
					return label
				}

				return this.cacheLabel(label)
			}))
		})
	},

	cacheLabel(label) {
		labelMap[label.id] = label

		return label
	}

}
