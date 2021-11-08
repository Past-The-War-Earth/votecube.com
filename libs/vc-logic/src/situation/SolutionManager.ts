import { DI } from '@airport/di'
import { DeepPartial } from '@airport/pressurization'
import {
	Situation,
	Solution,
	SolutionApiClient
} from '@votecube/votecube'
import { IUiSolution } from '@votecube/model'
import {
	SOLUTION_MANAGER
} from '../tokens'

export interface ISolutionManager {

	getSolutionForSituation(
		// User-information is in AIRport
		situationRepositoryUuId: string
	): Promise<IUiSolution>

	saveSolution(
		situation: DeepPartial<Situation>
	): Promise<void>

}

export class SolutionManager
	implements ISolutionManager {

	solutionApi = new SolutionApiClient()

	async getSolutionForSituation(
		// User-information is in AIRport
		situationRepositoryUuid: string
	): Promise<IUiSolution> {

		if (!situationRepositoryUuid || situationRepositoryUuid === 'unsolved') {
			return this.getStubSolution()
		}

		return await this.solutionApi.getSolutionForSituation(situationRepositoryUuid)
	}

	async saveSolution(
		solution: DeepPartial<Solution>
	): Promise<void> {
		if (solution !== 'unsolved') {
			throw new Error(`Cannot re-save a solution`)
		}

		return await this.solutionApi.saveSolution(solution)
	}

	private getStubSolution(): IUiSolution {
		return {
			1: {
				factorNumber: 1,
				outcome: 'A',
				value: 33
			},
			2: {
				factorNumber: 2,
				outcome: 'A',
				value: 33
			},
			3: {
				factorNumber: 3,
				outcome: 'B',
				value: 34
			}
		}
	}

	private dbToUi(
		solution: DeepPartial<Solution>
	): IUiSolution {
		return null
	}

	private uiToDb(
		solution: IUiSolution
	): DeepPartial<Solution> {
		return null
	}

}

DI.set(SOLUTION_MANAGER, SolutionManager)
