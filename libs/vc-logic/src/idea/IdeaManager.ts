import {
	container,
	DI
} from '@airport/di'
import { IFieldGroup } from '@votecube/forms'
import {
	IUiAgreement,
	IUiIdea,
	IUiLabel,
} from '@votecube/model'
import {
	IRepositoryIdentifier,
	IIdea,
	IdeaApiClient
} from '@votecube/votecube'
import {
	CUBE_LOGIC,
	LOGIC_UTILS,
	IDEA_FORM_MANAGER,
	IDEA_MANAGER,
	IDEA_CONVERTER
} from '../tokens'

export interface IPageAgreement
	extends IUiAgreement {
	changeMillis?: number
}

export interface IIdeaManager {

	cachedIdea: ICachedIdea

	getIdea(
		hostingPlatform: string,
		repositoryUuId: string
	): Promise<IUiIdea>

	getAllIdeas(): Promise<IUiIdea[]>

	getIdeasForCategory(
		category: IUiLabel
	): Promise<IUiIdea[]>

	getLeafIdeas(
		stemIdeaRepositoryUuId: string
	): Promise<IUiIdea[]>

	getStemIdea(
		leafIdeaUuId: string
	): Promise<IUiIdea>

	mergeForm(): Promise<void>

	saveIdea(
		idea: IUiIdea,
		createNewRepository: boolean
	): Promise<IRepositoryIdentifier>

	saveCachedIdea(
		user,
		createNewRepository: boolean
	): Promise<IRepositoryIdentifier>
}

export interface ICachedIdea {
	db: IIdea
	form?: IFieldGroup
	originalUi: IUiIdea
	ui: IUiIdea
}

export class IdeaManager
	implements IIdeaManager {

	ideaApi = new IdeaApiClient()

	private theCachedIdea: ICachedIdea = {
		db: null,
		form: null,
		originalUi: null,
		ui: null,
	}

	get cachedIdea(): ICachedIdea {
		return this.theCachedIdea
	}

	async getIdea(
		hostingPlatform: string,
		repositoryUuId: string
	): Promise<IUiIdea> {
		const ui = this.cachedIdea.ui
		if (!repositoryUuId || repositoryUuId === ':repositoryUuId'
			|| (ui && ui.repository.source === hostingPlatform
				&& ui.repository.uuId === repositoryUuId)) {
			return ui
		}

		const dbIdea = await this.ideaApi
			.getIdea(hostingPlatform, repositoryUuId)
		this.cachedIdea.db = dbIdea

		const converter = await container(this).get(IDEA_CONVERTER)
		this.cachedIdea.ui = converter.dbToUi(dbIdea)

		return this.cachedIdea.ui
	}

	async getAllIdeas(): Promise<IUiIdea[]> {
		return []
	}

	async getIdeasForCategory(
		category: IUiLabel
	): Promise<IUiIdea[]> {
		return []
	}

	async getLeafIdeas(
		stemIdeaRepositoryUuId: string
	): Promise<IUiIdea[]> {
		return []
	}

	async getStemIdea(
		leafIdeaUuId: string
	): Promise<IUiIdea> {
		return null
	}

	async mergeForm(): Promise<void> {
		const form = this.cachedIdea.form
		if (!form) {
			return
		}

		const [ideaFormManager, logicUtils] = await container(this).get(
			IDEA_FORM_MANAGER, LOGIC_UTILS)

		const ui = ideaFormManager
			.fromForm(form.value, this.cachedIdea.ui)

		const oldUiIdea = this.cachedIdea.ui

		if (oldUiIdea) {
			logicUtils.overlay(oldUiIdea, ui)
		} else {
			const cubeLogic = await container(this).get(CUBE_LOGIC)

			logicUtils.overlay({
				factors: cubeLogic.getIdeaFactorPositionDefault()
			}, ui)
		}
		if (oldUiIdea) {
			logicUtils.copyProperties(oldUiIdea, ui, [
				// 'actorId',
				// 'actorRecordId',
				'ageSuitability',
				// 'repositoryId',
				// 'repositoryUuId',
			])
		}
		this.cachedIdea.ui = ui
	}

	/*
	 * Publishing a idea makes it publically accessable by adding it
	 * to Vepsa FTS and showing it in search results either by direct
	 * text match or by label match.
	 */
	async publishIdea(
		idea: IUiIdea
	): Promise<void> {
		// TODO: implement publish once saving across devices works
		// (using votecube.com backend)
	}

	/*
	 * For now saving the idea saves it in votecube via ScyllaDb.
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
	async saveIdea(
		idea: IUiIdea,
		createNewRepository: boolean
	): Promise<IRepositoryIdentifier> {
		const originalUi = this.cachedIdea.originalUi
		const ui = this.cachedIdea.ui

		const logicUtils = await container(this).get(LOGIC_UTILS)

		if (!logicUtils.isDifferent(originalUi, ui)) {
			return
		}

		const converter = await container(this).get(IDEA_CONVERTER)

		const dbIdea = converter.uiToDb(ui, this.cachedIdea.db)

		let repositoryIdentifier
		if (createNewRepository) {
			repositoryIdentifier = await this.ideaApi
				.saveNewIdea(dbIdea)
		} else {
			repositoryIdentifier = await this.ideaApi
				.saveExistingIdea(dbIdea)
		}

		this.cachedIdea.db = dbIdea

		this.theCachedIdea = {
			db: dbIdea,
			form: null,
			originalUi: null,
			ui: null,
		}

		return repositoryIdentifier
	}

	async saveCachedIdea(
		user,
		createNewRepository: boolean
	): Promise<IRepositoryIdentifier> {
		return await this.saveIdea(this.cachedIdea.ui, createNewRepository)
	}

}

DI.set(IDEA_MANAGER, IdeaManager)
