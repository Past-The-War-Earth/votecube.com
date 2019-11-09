import {DI}          from '@airport/di'
import {IFieldGroup} from '@votecube/forms'
import {
	IVariationData,
	IVariationDelta,
	IVariationDoc,
	PollKey,
	VariationKey
}                    from '@votecube/model'
import {IUser}       from '@votecube/model/lib/src'
import {
	copy,
	DB_CONVERTER,
	POLL_DAO,
	VERSIONED_PROPERTY_NAMES
}                    from '@votecube/public-db'
import {POLL_STORE}  from '../../diTokens'

export interface IPollStore {

	getVariation(
		pollKey: PollKey,
		variationKey: VariationKey
	): Promise<IVariationData>

	mergeForm(): void

}

export interface IStoredVariation {

	doc: IVariationDoc
	form?: IFieldGroup
	originalUi: IVariationData
	ui: IVariationData
	uiDelta?: IVariationDelta

}

export class PollStore
	implements IPollStore {

	currVariation: IStoredVariation = {
		doc: null,
		form: null,
		originalUi: null,
		ui: null,
		uiDelta: null,
	}

	async getVariation(
		pollKey: PollKey,
		variationKey: VariationKey
	): Promise<IVariationData> {
		if (!pollKey) {
			this.currVariation.doc = null

			return this.currVariation.ui
		}

		if (this.currVariation.ui
			&& this.currVariation.ui.pollKey === pollKey
			&& this.currVariation.ui.key === variationKey) {
			return this.currVariation.ui
		}

		const pollDao = await DI.get(POLL_DAO)

		const doc = await pollDao.getVariation(pollKey, variationKey)

		const dbConverter = await DI.get(DB_CONVERTER)

		const ui: any = dbConverter.fromDb(doc, [
			...VERSIONED_PROPERTY_NAMES,
			'pollKey'
		])

		const originalUi = copy(ui)

		this.currVariation = {
			doc,
			originalUi,
			ui
		}

		return ui
	}

	mergeForm(): void {
		const form = this.currVariation.form
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
		const oldUi = this.currVariation.ui
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
		if (oldUi) {
			copyVariationProperties(currVariation.ui, ui)
			copyDbProperties(currVariation.ui, ui)
		}
		currVariation.ui      = ui
		currVariation.uiDelta = uiDelta
	}

	async saveCurrentVariation(
		user: IUser
	) {
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

		const ui = this.currVariation.ui
		for (const newPfp of ui.pollFactorPositions) {
			pfpMap[newPfp.factorIndex][newPfp.outcome] = newPfp
		}

		const uiDelta = this.currVariation.uiDelta
		for (const deltaPfp of uiDelta.pollFactorPositions) {
			uiDeltaPfpMap[deltaPfp.factorIndex][deltaPfp.outcome] = deltaPfp
		}

		const originalUi = this.currVariation.originalUi
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

		this.currVariation = {
			doc: null,
			form: null,
			originalUi: null,
			ui: null,
			uiDelta: null,
		}
	}
}

DI.set(POLL_STORE, PollStore)
