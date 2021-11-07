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
import { SituationApiClient } from '@votecube/votecube'
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

	cachedSituation: ICachedSituation

	getSituation(
		repositoryUuId: string
	): Promise<DeepPartial<IUiSituation>>

	getAllSituations(): Promise<IUiSituation[]>

	getSituationsForCategory(
		category: IUiCategory
	): Promise<IUiSituation[]>

	getLeafSituations(
		stemSituationRepositoryUuId: string
	): Promise<IUiSituation[]>

	getStemSituation(
		leafSituationUuId: string
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

	private theCachedSituation: ICachedSituation = {
		form: null,
		originalUi: null,
		ui: null,
	}

	get cachedSituation(): ICachedSituation {
		return this.theCachedSituation
	}

	async getSituation(
		repositoryUuId: string
	): Promise<DeepPartial<IUiSituation>> {
		if (!repositoryUuId || repositoryUuId === 'unsolved') {
			return this.cachedSituation.ui
		}

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
		stemSituationRepositoryUuId: string
	): Promise<IUiSituation[]> {
		return []
	}

	async getStemSituation(
		leafSituationUuId: string
	): Promise<IUiSituation> {
		return null
	}

	async mergeForm(): Promise<void> {
		const form = this.cachedSituation.form
		if (!form) {
			return
		}

		const [situationFormManager, logicUtils] = await container(this).get(
			SITUATION_FORM_MANAGER, LOGIC_UTILS)

		const ui = situationFormManager
			.fromForm(form.value, this.cachedSituation.ui)

		const oldUiSituation = this.cachedSituation.ui

		if (oldUiSituation) {
			logicUtils.overlay(oldUiSituation, ui)
		} else {
			const cubeLogic = await container(this).get(CUBE_LOGIC)

			logicUtils.overlay({
				factors: cubeLogic.getSituationFactorPositionDefault()
			}, ui)
		}
		if (oldUiSituation) {
			logicUtils.copyProperties(oldUiSituation, ui, [
				'actorId',
				'actorRecordId',
				'ageSuitability',
				'repositoryId',
				'repositoryUuId',
			])
			if (oldUiSituation.parent) {
				if (!ui.parent) {
					ui.parent = {} as any
				}
				logicUtils.copyProperties(oldUiSituation.parent, ui.parent, [
					'actorId',
					'actorRecordId',
					'ageSuitability',
					'repositoryId',
					'repositoryUuId',
				])
			}
		}
		this.cachedSituation.ui = ui
	}

	async saveSituation(
		situation: IUiSituation
	): Promise<void> {
		const originalUi = this.cachedSituation.originalUi
		const ui = this.cachedSituation.ui

		const logicUtils = await container(this).get(LOGIC_UTILS)

		if (!logicUtils.isDifferent(originalUi, ui)) {
			return
		}

		const converter = await container(this).get(SITUATION_CONVERTER)

		const dbSituation = converter.uiToDb(ui)

		await this.situationApi.saveSituation(dbSituation);

		this.theCachedSituation = {
			form: null,
			originalUi: null,
			ui: null,
		}

	}

}

DI.set(SITUATION_MANAGER, SituationManager)
