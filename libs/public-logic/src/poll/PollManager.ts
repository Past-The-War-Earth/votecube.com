import {DI}          from '@airport/di'
import {IFieldGroup} from '@votecube/forms'
import {
	IUser,
	IVariationData,
	IVariationDelta,
	IVariationDoc,
	IVote,
	Poll_Key,
	Variation_Key
}                    from '@votecube/model'
import {
	DB_CONVERTER,
	DB_UTILS,
	POLL_DAO
}                    from '@votecube/public-db'
import {
	CUBE_LOGIC,
	LOGIC_UTILS,
	POLL_FORM_MANAGER,
	POLL_MANAGER
}                    from '../diTokens'

export interface IPageVote
	extends IVote {
	changeMillis: number
}

export interface IPollManager {

	currentVariation: IStoredVariation

	getVariation(
		pollKey: Poll_Key,
		variationKey: Variation_Key
	): Promise<IVariationData>

	mergeForm(): Promise<void>

	saveCurrentVariation(
		user: IUser
	): Promise<void>

}

export interface IStoredVariation {

	doc: IVariationDoc
	form?: IFieldGroup
	originalUi: IVariationData
	ui: IVariationData
	uiDelta?: IVariationDelta

}

export class PollManager
	implements IPollManager {

	private currVariation: IStoredVariation = {
		doc: null,
		form: null,
		originalUi: null,
		ui: null,
		uiDelta: null,
	}

	get currentVariation(): IStoredVariation {
		return this.currVariation
	}

	async getVariation(
		pollKey: Poll_Key,
		variationKey: Variation_Key
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

		const [dbConverter, dbUtils] = await DI.get(DB_CONVERTER, DB_UTILS)

		const ui: any = dbConverter.fromDb(doc, dbUtils.subPollProps)

		const originalUi = dbUtils.copy(ui)

		this.currVariation = {
			doc,
			originalUi,
			ui
		}

		return ui
	}

	async mergeForm(): Promise<void> {
		const form = this.currVariation.form
		if (!form) {
			return
		}

		const [pollFormManager, logicUtils, dbUtils] = await DI.get(
			POLL_FORM_MANAGER, LOGIC_UTILS, DB_UTILS)

		const ui: IVariationData      = pollFormManager.fromForm(form.value)
		const uiDelta: IVariationDelta = pollFormManager.fromForm(form.changeFlags)

		const oldUi = this.currVariation.ui

		if (oldUi) {
			logicUtils.overlay(oldUi, ui)
		} else {
			const cubeLogic = await DI.get(CUBE_LOGIC)

			logicUtils.overlay(cubeLogic.getPollFactorPositionDefault(), ui)
		}
		if (oldUi) {
			logicUtils.copyProperties(oldUi, ui, dbUtils.subPollProps)
		}
		this.currVariation.ui      = ui
		this.currVariation.uiDelta = uiDelta
	}

	async saveCurrentVariation(
		user: IUser
	): Promise<void> {
		const originalUi = this.currVariation.originalUi
		const ui         = this.currVariation.originalUi
		const delta      = this.currVariation.uiDelta

		const [dbUtils, logicUtils] = await DI.get(DB_UTILS, LOGIC_UTILS)

		logicUtils.setDeltas(originalUi, ui, delta)

		const dbConverter = await DI.get(DB_CONVERTER)

		const newDoc = dbConverter.toVersionedDb(ui, delta,
			this.currVariation.doc, dbUtils.subPollProps)

		const pollDao = await DI.get(POLL_DAO)

		await pollDao.save(newDoc, user)

		this.currVariation = {
			doc: null,
			form: null,
			originalUi: null,
			ui: null,
			uiDelta: null,
		}
	}

}

DI.set(POLL_MANAGER, PollManager)
