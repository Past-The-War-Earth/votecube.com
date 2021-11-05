import { DI } from '@airport/di'
import { DeepPartial } from '@airport/pressurization'
import {
	Situation,
	Solution,
} from '@votecube/votecube'
import { IUiSolution } from '@votecube/model'
import {
	SOLUTION_MANAGER
} from '../tokens'

export interface ISolutionManager {

	getSolutionForSituation(
		// User-information is in AIRport
		situation: DeepPartial<Situation>
	): Promise<IUiSolution>

	saveSolution(
		situation: DeepPartial<Situation>
	): Promise<void>

}

export class SolutionManager
	implements ISolutionManager {

	async getSolutionForSituation(
		// User-information is in AIRport
		situation: DeepPartial<Situation>
	): Promise<IUiSolution> {

		if (!situation) {
			return this.getStubSolution()
		}

		// TODO: add AIRport call for data

		return null
	}

	async saveSolution(
		situation: DeepPartial<Situation>
	): Promise<void> {

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
				factorNumber: 2,
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
		vote: IUiSolution
	): DeepPartial<Solution> {
		return null
	}

}

DI.set(SOLUTION_MANAGER, SolutionManager)
