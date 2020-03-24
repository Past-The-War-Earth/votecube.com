import {
	container,
	DI
}                    from '@airport/di'
import {IFieldGroup} from '@votecube/forms'
import {
	IPollData,
	IUiPollRevision,
	IUiPollRevisionDelta,
	IUser,
	IRevisionData,
	IRevisionDelta,
	IRevisionDoc,
	IVote,
	Poll_Id,
	Theme_Id,
	Revision_Id
} from '@votecube/model'
import {
	DB_CONVERTER,
	DB_UTILS,
	IDbConverter,
	IDbUtils,
	POLL_DAO
}                    from '@votecube/public-db'
import {
	CUBE_LOGIC,
	LOGIC_UTILS,
	POLL_FORM_MANAGER,
	POLL_MANAGER
}                    from '../tokens'

export interface IPageVote
	extends IVote {
	changeMillis: number
}

export interface IPollManager {

	currentRevision: IStoredRevision

	getAllPolls(): Promise<IPollData[]>

	getChildRevisionListings(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionData[]>

	getPollsForTheme(
		themeId: Theme_Id
	): Promise<IPollData[]>

	getRevision(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionData>

	getRevisionListing(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionData>

	mergeForm(): Promise<void>

	saveCurrentRevision(
		user: IUser
	): Promise<void>

}

export interface IStoredRevision {

	doc: IRevisionDoc
	form?: IFieldGroup
	originalUi: IUiPollRevision
	ui: IUiPollRevision
	uiDelta?: IUiPollRevisionDelta

}

export class PollManager
	implements IPollManager {

	private currRevision: IStoredRevision = {
		doc: null,
		form: null,
		originalUi: null,
		ui: null,
		uiDelta: null,
	}

	get currentRevision(): IStoredRevision {
		return this.currRevision
	}

	async getAllPolls(): Promise<IPollData[]> {
		const pollDao = await container(this).get(POLL_DAO)

		const pollDocs = await pollDao.getAll()

		return await this.convertDocs(pollDocs)
	}

	async getChildRevisionListings(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionData[]> {
		const pollDao = await container(this).get(POLL_DAO)

		const revisionDocs =
			      await pollDao.getChildRevisionListings(pollId, revisionId)

		return await this.convertDocs(revisionDocs)
	}

	async getPollsForTheme(
		themeId: Theme_Id
	): Promise<IPollData[]> {
		const pollDao = await container(this).get(POLL_DAO)

		const pollDocs = await pollDao.getForTheme(themeId)

		return await this.convertDocs(pollDocs)
	}

	async getRevision(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionData> {
		if (!pollId) {
			this.currRevision.doc = null

			return this.currRevision.ui
		}

		if (this.currRevision.ui
			&& this.currRevision.ui.pollId === pollId
			&& this.currRevision.ui.id === revisionId) {
			return this.currRevision.ui
		}

		const pollDao = await container(this).get(POLL_DAO)

		const doc = await pollDao.getRevision(pollId, revisionId)

		const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS)

		const ui: any = dbConverter.fromDb(doc, dbUtils.subPollProps, dbUtils.excludedProps)

		const originalUi = dbUtils.copy(ui)

		this.currRevision = {
			doc,
			originalUi,
			ui
		}

		return ui
	}

	async getRevisionListing(
		pollId: Poll_Id,
		revisionId: Revision_Id
	): Promise<IRevisionData> {
		const pollDao = await container(this).get(POLL_DAO)

		const revisionDoc =
			      await pollDao.getRevisionListing(pollId, revisionId)

		return await this.convertDoc(revisionDoc)
	}

	async mergeForm(): Promise<void> {
		const form = this.currRevision.form
		if (!form) {
			return
		}

		const [pollFormManager, logicUtils, dbUtils] = await container(this).get(
			POLL_FORM_MANAGER, LOGIC_UTILS, DB_UTILS)

		const ui: IRevisionData       = pollFormManager.fromForm(form.value)
		const uiDelta: IRevisionDelta = pollFormManager.fromForm(form.changeFlags)

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
			logicUtils.copyProperties(oldUi, ui, dbUtils.subPollProps)
		}
		this.currRevision.ui      = ui
		this.currRevision.uiDelta = uiDelta
	}

	async saveCurrentRevision(
		user: IUser
	): Promise<void> {
		const originalUi = this.currRevision.originalUi
		const ui         = this.currRevision.ui
		const delta      = this.currRevision.uiDelta

		const [dbUtils, logicUtils] = await container(this).get(DB_UTILS, LOGIC_UTILS)

		logicUtils.setDeltas(originalUi, ui, delta)

		const dbConverter = await container(this).get(DB_CONVERTER)

		const dbObject = dbConverter.toVersionedDb(ui, delta,
			this.currRevision.doc, dbUtils.subPollProps)

		const pollDao = await container(this).get(POLL_DAO)

		await pollDao.save(dbObject, user)

		this.currRevision = {
			doc: null,
			form: null,
			originalUi: null,
			ui: null,
			uiDelta: null,
		}
	}

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

}

DI.set(POLL_MANAGER, PollManager)
