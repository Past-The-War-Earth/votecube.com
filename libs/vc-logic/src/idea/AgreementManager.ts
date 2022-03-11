import { container, DI } from '@airport/di'
import {
	AgreementApiClient
} from '@votecube/votecube'
import {
	IUiRepositoryRecord,
	IUiIdea,
	IUiAgreement
} from '@votecube/model'
import {
	IDEA_CONVERTER,
	IDEA_MANAGER,
	AGREEMENT_CONVERTER,
	AGREEMENT_MANAGER
} from '../tokens'

export interface IAgreementManager {

	getAgreementForIdea(
		// User-information is in AIRport
		ideaRepositoryUuId: string
	): Promise<IUiAgreement>

	saveAgreement(
		idea: IUiIdea,
		agreement: IUiAgreement
	): Promise<void>

	saveCachedIdeaAgreement(
		agreement: IUiAgreement
	): Promise<void>

}

export class AgreementManager
	implements IAgreementManager {

	agreementApi = new AgreementApiClient()

	async getAgreementForIdea(
		// User-information is in AIRport
		ideaRepositoryUuid: string
	): Promise<IUiAgreement> {
		if (!ideaRepositoryUuid || ideaRepositoryUuid === 'unsolved') {
			return this.getStubAgreement()
		}

		let agreement = await this.agreementApi
			.getMyAgreementForIdea(ideaRepositoryUuid)
		if (!agreement) {
			return this.getStubAgreement()
		}

		const agreementConverter = await container(this).get(AGREEMENT_CONVERTER)

		return agreementConverter.dbToUi(agreement)
	}

	async saveAgreement(
		idea: IUiIdea,
		agreement: IUiAgreement
	): Promise<void> {
		const [ideaManager, agreementConverter] = await container(this)
			.get(IDEA_MANAGER, AGREEMENT_CONVERTER)


		const dbAgreement = agreementConverter.uiToDb(
			agreement, idea.ageSuitability, ideaManager.cachedIdea.db)

		await this.agreementApi.saveAgreement(dbAgreement)
	}

	async saveCachedIdeaAgreement(
		agreement: IUiAgreement
	): Promise<void> {
		const ideaManager = await container(this).get(IDEA_MANAGER)
		await this.saveAgreement(ideaManager.cachedIdea.ui, agreement)
	}

	private getStubAgreement(): IUiAgreement {
		return {
			...this.getStubIds(),
			1: {
				...this.getStubIds(),
				factorNumber: 1,
				outcome: 'A',
				value: 33
			},
			2: {
				...this.getStubIds(),
				factorNumber: 2,
				outcome: 'A',
				value: 33
			},
			3: {
				...this.getStubIds(),
				factorNumber: 3,
				outcome: 'B',
				value: 34
			}
		}
	}

	private getStubIds(): IUiRepositoryRecord {
		return {
			// actorId: null,
			// actorUuId: null,
			// actorRecordId: null,
			ageSuitability: null,
			// repositoryId: null,
			// repositoryUuId: null,
		}
	}

}

DI.set(AGREEMENT_MANAGER, AgreementManager)
