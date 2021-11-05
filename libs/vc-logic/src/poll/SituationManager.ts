import {
	container,
	DI
} from '@airport/di'
import { IFieldGroup } from '@votecube/forms'
import {
	IUiSolution,
	IUiSituation,
	IUiCategory,
} from '@votecube/model'
import { SituationApi } from '@votecube/votecube/lib/server'
import {
	CONNECTION_MANAGER,
	CUBE_LOGIC,
	LOGIC_UTILS,
	SITUATION_FORM_MANAGER,
	SITUATION_MANAGER,
	SITUATION_CONVERTER
} from '../tokens'

export interface IPageVote
	extends IUiSituation {
	changeMillis?: number
}

export interface ISituationManager {

	currentRevision: IStoredRevision

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

export interface IStoredRevision {
	form?: IFieldGroup
	originalUi: IUiSolution
	ui: IUiSolution
}

export class SituationManager
	implements ISituationManager {

	situationApi = new SituationApi()

	private currRevision: IStoredRevision = {
		// doc: null,
		form: null,
		originalUi: null,
		ui: null,
		uiDelta: null,
	}

	get currentRevision(): IStoredRevision {
		return this.currRevision
	}



	async getSituationsForCategory(
		category: IUiCategory
	): Promise<IUiSituation[]> {
		return []
	}


	async getAllPolls(): Promise<IUiPoll<IsData>[]> {
		// const pollDao = await container(this).get(POLL_DAO)
		//
		// const pollDocs = await pollDao.getAll()
		//
		// return await this.convertDocs(pollDocs)

		return []
	}

	async getChildRevisionListings(
		pollId: Poll_Id,
		revisionId: PollRevision_Id
	): Promise<IUiSolution[]> {
		// const pollDao = await container(this).get(POLL_DAO)
		//
		// const revisionDocs =
		// 	      await pollDao.getChildRevisionListings(pollId, revisionId)
		//
		// return await this.convertDocs(revisionDocs)

		return []
	}

	async getPollsForTheme(
		themeId: Theme_Id
	): Promise<IUiPoll<IsData>[]> {
		// const pollDao = await container(this).get(POLL_DAO)
		//
		// const pollDocs = await pollDao.getForTheme(themeId)
		//
		// return await this.convertDocs(pollDocs)

		return []
	}

	async mergeForm(): Promise<void> {
		const form = this.currRevision.form
		if (!form) {
			return
		}

		const [pollFormManager, logicUtils] = await container(this).get(
			SITUATION_FORM_MANAGER, LOGIC_UTILS)

		const ui: IUiSolution = pollFormManager.fromForm(form.value)
		const uiDelta: IUiSolutionDelta = pollFormManager.fromForm(form.changeFlags)

		const oldUi = this.currRevision.ui

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
		this.currRevision.ui = ui
		this.currRevision.uiDelta = uiDelta
	}

	async saveCurrentRevision(
		user: IUserAccount
	): Promise<void> {
		const originalUi = this.currRevision.originalUi
		const ui = this.currRevision.ui
		const delta = this.currRevision.uiDelta

		const logicUtils = await container(this).get(LOGIC_UTILS)

		logicUtils.setDeltas(originalUi, ui, delta)

		const converter = await container(this).get(SITUATION_CONVERTER)

		// const response = await fetch('/add/poll/0/0', {
		// 	method: 'POST',
		// 	// headers: {
		// 	// 	'Content-Type': 'application/json'
		// 	// },
		// 	body: JSON.stringify(data) // body data type must match "Content-Type" header
		// })
		//
		// await response.json()

		const pollRevision = converter.uiToDb(ui
			// , delta
		)

		const connectionManager = await container(this).get(CONNECTION_MANAGER)
		await connectionManager.put('createRevision', {
			pollRevision,
			user
		})

		this.currRevision = {
			form: null,
			originalUi: null,
			ui: null,
			uiDelta: null,
		}

	}

	/*
	private async convertDocs<In, Out>(
		docs: In[]
	): Promise<Out[]> {
		const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS)

		const data = docs.map(
			doc => this.convertADoc<In, Out>(doc, dbConverter, dbUtils))

		return data
	}

	private async convertDoc<In, Out>(
		doc: In
	): Promise<Out> {
		const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS)

		const data = this.convertADoc<In, Out>(doc, dbConverter, dbUtils)

		return data
	}

	private convertADoc<In, Out>(
		doc: In,
		dbConverter: IDbConverter,
		dbUtils: IDbUtils
	): Out {
		const data: Out = dbConverter.fromDb(doc, dbUtils.subPollProps, dbUtils.excludedProps)

		return data
	}
	 */

}

DI.set(SITUATION_MANAGER, SituationManager)
