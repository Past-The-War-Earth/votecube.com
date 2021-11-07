import {DI}              from '@airport/di'
import {
	Factor_Number
}                        from '@votecube/cube-logic'
import {
	ITweenSolution,
	ITweenSolutionFactor,
	IUiSolution,
	IUiSolutionFactor,
	SolutionFactor_Value
}                        from '@votecube/model'
import {
	Observable,
	Subject
}                        from 'rxjs'
import {SITUATION_MAIN_LOGIC} from '../../../tokens'

type FrameDuration = number
type FrameNumber = number
type NumberOfFrames = number

export interface IFactorFrameConfig {
	newDirFrameNumber: FrameNumber
	newSolutionFactor: ITweenSolutionFactor
	newSolutionValue: SolutionFactor_Value
	numNewDirFrames: NumberOfFrames
	numOldDirFrames: NumberOfFrames
	numRemainingOldDirFrames: NumberOfFrames
	oldSolutionFactor: IUiSolutionFactor
	oldSolutionValue: SolutionFactor_Value
	zeroValueFrameNumber: FrameNumber
}

export interface IUiSolutionFrameConfig {
	1: IFactorFrameConfig
	2: IFactorFrameConfig
	3: IFactorFrameConfig
}

export interface IFactorConfig {
	newSolutionFactor: ITweenSolutionFactor
}

export interface ISituationMainLogic {

	copySolutionToTween(
		solution: IUiSolution,
		lastSolution: IUiSolution
	): ITweenSolution

	scheduleFactorTweens(
		oldSolution: IUiSolution,
		newSolution: ITweenSolution,
		durationMillis: FrameDuration,
	): Observable<ITweenSolution>

	solutionsEqual(
		lastSolution: IUiSolution,
		solution: IUiSolution
	): boolean

}

export class SituationMainLogic
	implements ISituationMainLogic {

	solutionsEqual(
		lastSolution: IUiSolution,
		solution: IUiSolution
	): boolean {
		return lastSolution && solution
			&& lastSolution[1].outcome === solution[1].outcome
			&& lastSolution[2].outcome === solution[2].outcome
			&& lastSolution[3].outcome === solution[3].outcome
			&& lastSolution[1].value === solution[1].value
			&& lastSolution[2].value === solution[2].value
			&& lastSolution[3].value === solution[3].value
	}

	copySolutionToTween(
		solution: IUiSolution,
		lastSolution: IUiSolution
	): ITweenSolution {
		return {
			1: this.getTweenSolutionFactor(solution, lastSolution, 1),
			2: this.getTweenSolutionFactor(solution, lastSolution, 2),
			3: this.getTweenSolutionFactor(solution, lastSolution, 3)
		}
	}

	scheduleFactorTweens(
		oldSolution: IUiSolution,
		newSolution: ITweenSolution,
		durationMillis: FrameDuration,
	): Observable<ITweenSolution> {

		const subject = new Subject<ITweenSolution>()

		// const durationMillis    = 15000
		// const durationMillis    = 300
		const numFrames        = Math.ceil(durationMillis / 17)
		let numRemainingFrames = numFrames

		const config: IUiSolutionFrameConfig = {
			1: this.setupFactorTween(1, oldSolution, newSolution, numFrames),
			2: this.setupFactorTween(2, oldSolution, newSolution, numFrames),
			3: this.setupFactorTween(3, oldSolution, newSolution, numFrames)
		}

		const intervalHandle = setInterval(() => {
			this.runFactorTween(config[1], numRemainingFrames)
			this.runFactorTween(config[2], numRemainingFrames)
			this.runFactorTween(config[3], numRemainingFrames)

			numRemainingFrames--
			if (!numRemainingFrames) {
				this.setFinalFactor(newSolution[1], config[1])
				this.setFinalFactor(newSolution[2], config[2])
				this.setFinalFactor(newSolution[3], config[3])
				clearInterval(intervalHandle)
			}

			subject.next(newSolution)

			// page.set({factorDelta: page.get().factorDelta + 1})
		}, 17)

		return subject
	}

	private getTweenSolutionFactor(
		solution,
		solutionSolution,
		factorNumber
	): ITweenSolutionFactor {
		return {
			factorNumber,
			outcome: solution[factorNumber].outcome,
			tweenOutcome: solutionSolution[factorNumber].outcome,
			tweenValue: solutionSolution[factorNumber].value,
			value: solution[factorNumber].value
		}
	}

	private runFactorTween(
		config: IFactorFrameConfig,
		numRemainingFrames: NumberOfFrames
	): void {
		config.newDirFrameNumber++

		const {
			      newDirFrameNumber,
			      newSolutionFactor,
			      newSolutionValue,
			      numNewDirFrames,
			      numOldDirFrames,
			      numRemainingOldDirFrames,
			      oldSolutionFactor,
			      oldSolutionValue,
			      zeroValueFrameNumber
		      } = config

		if (zeroValueFrameNumber) {
			if (newSolutionFactor.outcome
				&& numRemainingFrames === zeroValueFrameNumber) {
				newSolutionFactor.tweenValue   = 0
				newSolutionFactor.tweenOutcome = newSolutionFactor.outcome
			} else if (!newSolutionFactor.outcome
				|| numRemainingFrames > zeroValueFrameNumber) {
				// Always go here if the factor is being removed (dir === 0)
				newSolutionFactor.tweenValue   = Math.floor(oldSolutionValue
					/ numOldDirFrames * numRemainingOldDirFrames) as SolutionFactor_Value
				newSolutionFactor.tweenOutcome = oldSolutionFactor.outcome
			} else {
				newSolutionFactor.tweenValue   = Math.floor(newSolutionValue
					/ numNewDirFrames * newDirFrameNumber) as SolutionFactor_Value
				newSolutionFactor.tweenOutcome = newSolutionFactor.outcome
			}
		} else {
			const factorValue          = oldSolutionValue + ((newSolutionValue - oldSolutionValue)
				/ numNewDirFrames * newDirFrameNumber)
			newSolutionFactor.tweenValue   = newSolutionValue > oldSolutionValue
				? Math.floor(factorValue) as SolutionFactor_Value
				: Math.ceil(factorValue) as SolutionFactor_Value
			newSolutionFactor.tweenOutcome = newSolutionFactor.outcome
		}

		config.numRemainingOldDirFrames--
	}

	// if(!newSolutionFactor.dir) {
	private setFinalFactor(
		newSolutionFactor: ITweenSolutionFactor,
		outcomeConfig: IFactorConfig
	): void {
		newSolutionFactor.tweenOutcome = outcomeConfig.newSolutionFactor.outcome
		// }
		newSolutionFactor.tweenValue   = outcomeConfig.newSolutionFactor.value
	}

	private setupFactorTween(
		factorNumber: Factor_Number,
		oldSolution: IUiSolution,
		newSolution: ITweenSolution,
		numFrames: NumberOfFrames
	): IFactorFrameConfig {

		const oldSolutionFactor: IUiSolutionFactor      = oldSolution[factorNumber]
		const newSolutionFactor: ITweenSolutionFactor = newSolution[factorNumber]

		const oldSolutionValue: SolutionFactor_Value = oldSolutionFactor.value
		const newSolutionValue: SolutionFactor_Value = newSolutionFactor.value

		let zeroValueFrameNumber: FrameNumber        = 0
		let numNewDirFrames: NumberOfFrames
		let numOldDirFrames: NumberOfFrames          = 0
		let newDirFrameNumber: FrameNumber           = 0
		let numRemainingOldDirFrames: NumberOfFrames = 0
		if (oldSolutionFactor.outcome !== newSolutionFactor.outcome) {
			const valueDifference      = oldSolutionValue + newSolutionValue
			const oldSolutionFraction      = oldSolutionValue / valueDifference
			numOldDirFrames            = zeroValueFrameNumber = Math.ceil(numFrames * oldSolutionFraction)
			numRemainingOldDirFrames   = numOldDirFrames
			numNewDirFrames            = numFrames - numOldDirFrames
			newDirFrameNumber          = -numOldDirFrames
			newSolutionFactor.tweenOutcome = oldSolutionFactor.outcome
		} else {
			numNewDirFrames            = numFrames
			newSolutionFactor.tweenOutcome = newSolutionFactor.outcome
		}

		return {
			newDirFrameNumber,
			newSolutionFactor,
			newSolutionValue,
			numNewDirFrames,
			numOldDirFrames,
			numRemainingOldDirFrames,
			oldSolutionFactor,
			oldSolutionValue,
			zeroValueFrameNumber
		}
	}

}

DI.set(SITUATION_MAIN_LOGIC, SituationMainLogic)
