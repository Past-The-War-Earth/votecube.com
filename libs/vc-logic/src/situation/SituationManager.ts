import {
	container,
	DI
} from '@airport/di'
import { DeepPartial } from '@airport/pressurization'
import { IFieldGroup } from '@votecube/forms'
import {
	IUiSolution,
	IUiSituation,
	IUiCategory,
} from '@votecube/model'
import { Situation, SituationApiClient } from '@votecube/votecube'
import {
	CUBE_LOGIC,
	LOGIC_UTILS,
	SITUATION_FORM_MANAGER,
	SITUATION_MANAGER,
	SITUATION_CONVERTER
} from '../tokens'

export interface IPageSolution
	extends IUiSolution {
	changeMillis?: number
}

export interface ISituationManager {

	currentRevision: ICachedSituation

	getSituation(
		repositoryId: number
	): Promise<DeepPartial<Situation>>

	getAllSituations(): Promise<IUiSituation[]>

	getSituationsForCategory(
		category: IUiCategory
	): Promise<IUiSituation[]>

	getLeafSituations(
		situation: IUiSituation
	): Promise<IUiSituation[]>

	getStemSituation(
		situation: IUiSituation
	): Promise<IUiSituation>

	mergeForm(): Promise<void>

	saveSituation(
		situation: IUiSituation
	): Promise<void>

}

export interface ICachedSituation {
	form?: IFieldGroup
	originalUi: IUiSituation
	ui: IUiSituation
}

export class SituationManager
	implements ISituationManager {

	situationApi = new SituationApiClient()

	private currSituation: ICachedSituation = {
		form: null,
		originalUi: null,
		ui: null,
	}

	get currentRevision(): ICachedSituation {
		return this.currSituation
	}

	async getSituation(
		repositoryId: number
	): Promise<DeepPartial<Situation>> {
		return null
	}

	async getAllSituations(): Promise<IUiSituation[]> {
		return []
	}

	async getSituationsForCategory(
		category: IUiCategory
	): Promise<IUiSituation[]> {
		return []
	}

	async getLeafSituations(
		situation: IUiSituation
	): Promise<IUiSituation[]> {
		return []
	}

	async getStemSituation(
		situation: IUiSituation
	): Promise<IUiSituation> {
		return null
	}

	async mergeForm(): Promise<void> {
		const form = this.currSituation.form
		if (!form) {
			return
		}

		const [situationFormManager, logicUtils] = await container(this).get(
			SITUATION_FORM_MANAGER, LOGIC_UTILS)

		const ui = situationFormManager
			.fromForm(form.value, this.currSituation.ui)

		const oldUi = this.currSituation.ui

		if (oldUi) {
			logicUtils.overlay(oldUi, ui)
		} else {
			const cubeLogic = await container(this).get(CUBE_LOGIC)

			logicUtils.overlay({
				factors: cubeLogic.getPollFactorPositionDefault()
			}, ui)
		}
		if (oldUi) {
			logicUtils.copyProperties(oldUi, ui, [
				'createdAt',
				'pollId',
				'rootRevisionId',
				'userId'
			])
		}
		this.currSituation.ui = ui
	}

	async saveSituation(
		situation: IUiSituation
	): Promise<void> {
		const originalUi = this.currSituation.originalUi
		const ui = this.currSituation.ui

		const logicUtils = await container(this).get(LOGIC_UTILS)

		if (!logicUtils.isDifferent(originalUi, ui)) {
			return
		}

		const converter = await container(this).get(SITUATION_CONVERTER)

		const dbSituation = converter.uiToDb(ui)

		await this.situationApi.saveSituation(dbSituation);

		this.currSituation = {
			form: null,
			originalUi: null,
			ui: null,
		}

	}

}

DI.set(SITUATION_MANAGER, SituationManager)
