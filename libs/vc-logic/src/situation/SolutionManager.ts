import { container, DI } from '@airport/di'
import {
	SolutionApiClient
} from '@votecube/votecube'
import {
	IUiRepositoryRecord,
	IUiSituation,
	IUiSolution
} from '@votecube/model'
import {

	SITUATION_CONVERTER,
	SITUATION_MANAGER,
	SOLUTION_CONVERTER,
	SOLUTION_MANAGER
} from '../tokens'

export interface ISolutionManager {

	getSolutionForSituation(
		// User-information is in AIRport
		situationRepositoryUuId: string
	): Promise<IUiSolution>

	saveSolution(
		situation: IUiSituation,
		solution: IUiSolution
	): Promise<void>

	saveCachedSituationSolution(
		solution: IUiSolution
	): Promise<void>

}

export class SolutionManager
	implements ISolutionManager {

	solutionApi = new SolutionApiClient()

	async getSolutionForSituation(
		// User-information is in AIRport
		situationRepositoryUuid: string
	): Promise<IUiSolution> {
		if (!situationRepositoryUuid || situationRepositoryUuid === ':repositoryUuId') {
			return this.getStubSolution()
		}

		let solution = await this.solutionApi
			.getMySolutionForSituation(situationRepositoryUuid)
		if (!solution) {
			return this.getStubSolution()
		}

		const solutionConverter = await container(this).get(SOLUTION_CONVERTER)

		return solutionConverter.dbToUi(solution)
	}

	async saveSolution(
		situation: IUiSituation,
		solution: IUiSolution
	): Promise<void> {
		const [situationManager, solutionConverter] = await container(this)
			.get(SITUATION_MANAGER, SOLUTION_CONVERTER)


		const dbSolution = solutionConverter.uiToDb(
			solution, situation.ageSuitability, situationManager.cachedSituation.db)

		await this.solutionApi.saveSolution(dbSolution)
	}

	async saveCachedSituationSolution(
		solution: IUiSolution
	): Promise<void> {
		const situationManager = await container(this).get(SITUATION_MANAGER)
		await this.saveSolution(situationManager.cachedSituation.ui, solution)
	}

	private getStubSolution(): IUiSolution {
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

DI.set(SOLUTION_MANAGER, SolutionManager)
