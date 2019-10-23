import {DI}                                               from '@airport/di'
import {
	copy,
	POLL_DAO
}                                                         from '@votecube/public-db'
import * as pollFormFromConverter
                                                          from '../form/poll/fromConverter'
import {getDefaultCubePositionMapByFactorIndexAndOutcome} from './cube'
import {
	copyDbProperties,
	copyVariationProperties,
	fromVariationDoc
} from './db/fromConverter'
import {toVariationDoc}                                   from './db/toConverter'

var currVariation = {
	doc: null,
	form: null,
	originalUi: null,
	ui: null,
	uiDelta: null,
}

export var PollStore = {
	currentVariation: () => currVariation,
	getVariation: async (
		pollKey,
		variationKey
	) => {
		if (!pollKey) {
			currVariation.doc = null

			return currVariation.ui
		}

		if (currVariation.ui
		&& currVariation.ui.pollKey === pollKey
		&& currVariation.ui.key === variationKey) {
			return currVariation.ui
		}

		const pollDao = await DI.get(POLL_DAO)

		const doc = await pollDao.getVariation(pollKey, variationKey)

		const ui = fromVariationDoc(doc)

		const originalUi = copy(ui)

		currVariation = {
			doc,
			originalUi,
			ui
		}

		return ui
	},
	mergeForm: () => {
		const form = currVariation.form
		if (!form) {
			return
		}
		let ui       = pollFormFromConverter.formToDto(
			form.value
			// , positionMap
		)
		let uiDelta  = pollFormFromConverter.formToDto(form.changeFlags)
		const pfpMap = {
			1: {
				A: null,
				B: null
			},
			2: {
				A: null,
				B: null
			},
			3: {
				A: null,
				B: null
			}
		}
		for (const newPfp of ui.pollFactorPositions) {
			pfpMap[newPfp.factorIndex][newPfp.outcome] = newPfp
		}
		const oldUi = currVariation.ui
		if (oldUi) {
			for (const oldPfp of oldUi.pollFactorPositions) {
				const newPfp = pfpMap[oldPfp.factorIndex][oldPfp.outcome]
				newPfp.dir   = oldPfp.dir
				newPfp.axis  = oldPfp.axis
			}
			ui.ageSuitability = oldUi.ageSuitability
		} else {
			const defaultCubePositionMap = getDefaultCubePositionMapByFactorIndexAndOutcome()
			for (const newPfp of ui.pollFactorPositions) {
				const defaultCubePosition = defaultCubePositionMap[newPfp.factorIndex][newPfp.outcome]
				newPfp.axis               = defaultCubePosition.axis
				newPfp.dir                = defaultCubePosition.dir
			}
		}
		if(oldUi) {			
		copyVariationProperties(currVariation.ui, ui)
		copyDbProperties(currVariation.ui, ui)
		}
		currVariation.ui      = ui
		currVariation.uiDelta = uiDelta
	},
	saveCurrentVariation: async (
		user
	) => {
		const pfpMap        = {
			1: {
				A: null,
				B: null
			},
			2: {
				A: null,
				B: null
			},
			3: {
				A: null,
				B: null
			}
		}
		const uiDeltaPfpMap = {
			1: {
				A: null,
				B: null
			},
			2: {
				A: null,
				B: null
			},
			3: {
				A: null,
				B: null
			}
		}

		const ui = currVariation.ui
		for (const newPfp of ui.pollFactorPositions) {
			pfpMap[newPfp.factorIndex][newPfp.outcome] = newPfp
		}

		const uiDelta = currVariation.uiDelta
		for (const deltaPfp of uiDelta.pollFactorPositions) {
			uiDeltaPfpMap[deltaPfp.factorIndex][deltaPfp.outcome] = deltaPfp
		}

		const originalUi = currVariation.originalUi
		if (originalUi) {
			for (const originalPfp of originalUi.pollFactorPositions) {
				const newPfp     = pfpMap[originalPfp.factorIndex][originalPfp.outcome]
				const uiDeltaPfp = uiDeltaPfpMap[originalPfp.factorIndex][originalPfp.outcome]
				if (newPfp.dir !== originalPfp.dir) {
					uiDeltaPfp.dir = true
				}
				if (newPfp.axis !== originalPfp.axis) {
					uiDeltaPfp.axis = true
				}
			}
			if (ui.ageSuitability !== originalUi.ageSuitability) {
				uiDelta.ageSuitability = true
			}
		}

		const newDoc = toVariationDoc(ui, uiDelta, currVariation.doc)

		const pollDao = await DI.get(POLL_DAO)

		await pollDao.save(newDoc, user.user)

		currVariation = {
			doc: null,
			form: null,
			originalUi: null,
			ui: null,
			uiDelta: null,
		}
	}
}