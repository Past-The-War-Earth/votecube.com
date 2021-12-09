import {
	container,
	DI
} from '@airport/di'
import { IFieldGroup } from '@votecube/forms'
import {
	IUiSolution,
	IUiSituation,
	IUiLabel,
} from '@votecube/model'
import {
	IRepositoryIdentifier,
	ISituation,
	SituationApiClient
} from '@votecube/votecube'
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
		hostingPlatform: string,
		repositoryUuId: string
	): Promise<IUiSituation>

	getAllSituations(): Promise<IUiSituation[]>

	getSituationsForCategory(
		category: IUiLabel
	): Promise<IUiSituation[]>

	getLeafSituations(
		stemSituationRepositoryUuId: string
	): Promise<IUiSituation[]>

	getStemSituation(
		leafSituationUuId: string
	): Promise<IUiSituation>

	mergeForm(): Promise<void>

	saveSituation(
		situation: IUiSituation,
		createNewRepository: boolean
	): Promise<IRepositoryIdentifier>

	saveCachedSituation(
		user,
		createNewRepository: boolean
	): Promise<IRepositoryIdentifier>
}

export interface ICachedSituation {
	db: ISituation
	form?: IFieldGroup
	originalUi: IUiSituation
	ui: IUiSituation
}

export class SituationManager
	implements ISituationManager {

	situationApi = new SituationApiClient()

	private theCachedSituation: ICachedSituation = {
		db: null,
		form: null,
		originalUi: null,
		ui: null,
	}

	get cachedSituation(): ICachedSituation {
		return this.theCachedSituation
	}

	async getSituation(
		hostingPlatform: string,
		repositoryUuId: string
	): Promise<IUiSituation> {
		const ui = this.cachedSituation.ui
		if (!repositoryUuId || repositoryUuId === ':repositoryUuId'
			|| (ui && ui.repository.source === hostingPlatform
				&& ui.repository.uuId === repositoryUuId)) {
			return ui
		}

		const dbSituation = await this.situationApi
			.getSituation(hostingPlatform, repositoryUuId)
		this.cachedSituation.db = dbSituation

		const converter = await container(this).get(SITUATION_CONVERTER)
		this.cachedSituation.ui = converter.dbToUi(dbSituation)

		return this.cachedSituation.ui
	}

	async getAllSituations(): Promise<IUiSituation[]> {
		return []
	}

	async getSituationsForCategory(
		category: IUiLabel
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
				// 'actorId',
				// 'actorRecordId',
				'ageSuitability',
				// 'repositoryId',
				// 'repositoryUuId',
			])
		}
		this.cachedSituation.ui = ui
	}

	/*
	 * Publishing a situation makes it publically accessable by adding it
	 * to Vepsa FTS and showing it in search results either by direct
	 * text match or by label match.
	 */
	async publishSituation(
		situation: IUiSituation
	): Promise<void> {
		// TODO: implement publish once saving across devices works
		// (using votecube.com backend)
	}

	/*
	 * For now saving the situation saves it in votecube via ScyllaDb.
	 * it becomes accessible privately (if you know the private votecube UUID of
	 * the user) and supports data syncing (via retrieval of new transaction
	 * log entries)
	 * 
	 * Eventually, on initial save the user will be presented with a choice
	 *  of where they want to save it - privately in IPFS or semi-privately
	 * in the host application.  They can set that choice in Turbase.App settings
	 * (to say that by default save all private repositories to IPFS or to 
	 * host applications).  Note saving of private repos is done via Turbase,
	 * the host application is still free to save this data as it chooses fit
	 * (since there is no way to enforce what network connections the host application
	 * UI makes in a standard browser).
	 * 
	 * The user choice of where to save can be passed in from the application UI.  If
	 * that choice conflicts with the user settings the Turbase.App parent frame
	 * will pop-up a dialog asking the user to confirm their choice.
	 * 
	 * Once the repository is saved the user's choice of where to save becomes
	 * persistent and will take an explict action from the user to change it.  The
	 * application is aware of the choice and should put it into the URL, thus
	 * allowing the user to retrieve the private repository from the correct location
	 * via a saved link.
	 * 
	 * On initial save the user is redirected from the build screen to the
	 * screen with the same entity but the correct URL for where it is stored.
	 * 
	 */
	async saveSituation(
		situation: IUiSituation,
		createNewRepository: boolean
	): Promise<IRepositoryIdentifier> {
		const originalUi = this.cachedSituation.originalUi
		const ui = this.cachedSituation.ui

		const logicUtils = await container(this).get(LOGIC_UTILS)

		if (!logicUtils.isDifferent(originalUi, ui)) {
			return
		}

		const converter = await container(this).get(SITUATION_CONVERTER)

		const dbSituation = converter.uiToDb(ui, this.cachedSituation.db)

		const repositoryIdentifier = await this.situationApi
			.saveSituation(dbSituation, createNewRepository)
		this.cachedSituation.db = dbSituation

		this.theCachedSituation = {
			db: dbSituation,
			form: null,
			originalUi: null,
			ui: null,
		}

		return repositoryIdentifier
	}

	async saveCachedSituation(
		user,
		createNewRepository: boolean
	): Promise<IRepositoryIdentifier> {
		return await this.saveSituation(this.cachedSituation.ui, createNewRepository)
	}

}

DI.set(SITUATION_MANAGER, SituationManager)
