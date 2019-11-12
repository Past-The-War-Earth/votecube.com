import {DI}              from '@airport/di'
import {
	IObservable,
	Subject
}                        from '@airport/observe'
import {
	Factor_Number,
	ITweenVote,
	ITweenVoteFactor,
	IVote,
	IVoteFactor,
	VoteFactor_Value
}                        from '@votecube/model'
import {POLL_MAIN_LOGIC} from '../../../diTokens'

type FrameDuration = number
type FrameNumber = number
type NumberOfFrames = number

export interface IFactorFrameConfig {
	newDirFrameNumber: FrameNumber
	newVoteFactor: ITweenVoteFactor
	newVoteValue: VoteFactor_Value
	numNewDirFrames: NumberOfFrames
	numOldDirFrames: NumberOfFrames
	numRemainingOldDirFrames: NumberOfFrames
	oldVoteFactor: IVoteFactor
	oldVoteValue: VoteFactor_Value
	zeroValueFrameNumber: FrameNumber
}

export interface IVoteFrameConfig {
	1: IFactorFrameConfig
	2: IFactorFrameConfig
	3: IFactorFrameConfig
}

export interface IFactorConfig {
	newVoteFactor: ITweenVoteFactor
}

export interface IPollMainLogic {

	copyVoteToTween(
		vote: IVote,
		lastVote: IVote
	): ITweenVote

	scheduleFactorTweens(
		oldVote: IVote,
		newVote: ITweenVote,
		durationMillis: FrameDuration,
	): IObservable<ITweenVote>

	votesEqual(
		lastVote: IVote,
		vote: IVote
	): boolean

}

export class PollMainLogic
	implements IPollMainLogic {

	votesEqual(
		lastVote: IVote,
		vote: IVote
	): boolean {
		return lastVote && vote
			&& lastVote[1].outcome === vote[1].outcome
			&& lastVote[2].outcome === vote[2].outcome
			&& lastVote[3].outcome === vote[3].outcome
			&& lastVote[1].value === vote[1].value
			&& lastVote[2].value === vote[2].value
			&& lastVote[3].value === vote[3].value
	}

	copyVoteToTween(
		vote: IVote,
		lastVote: IVote
	): ITweenVote {
		return {
			1: this.getTweenVoteFactor(vote, lastVote, 1),
			2: this.getTweenVoteFactor(vote, lastVote, 2),
			3: this.getTweenVoteFactor(vote, lastVote, 3)
		}
	}

	scheduleFactorTweens(
		oldVote: IVote,
		newVote: ITweenVote,
		durationMillis: FrameDuration,
	): IObservable<ITweenVote> {

		const subject = new Subject<ITweenVote>()

		// const durationMillis    = 15000
		// const durationMillis    = 300
		const numFrames        = Math.ceil(durationMillis / 17)
		let numRemainingFrames = numFrames

		const config: IVoteFrameConfig = {
			1: this.setupFactorTween(1, oldVote, newVote, numFrames),
			2: this.setupFactorTween(2, oldVote, newVote, numFrames),
			3: this.setupFactorTween(3, oldVote, newVote, numFrames)
		}

		const intervalHandle = setInterval(() => {
			this.runFactorTween(config[1], numRemainingFrames)
			this.runFactorTween(config[2], numRemainingFrames)
			this.runFactorTween(config[3], numRemainingFrames)

			numRemainingFrames--
			if (!numRemainingFrames) {
				this.setFinalFactor(newVote[1], config[1])
				this.setFinalFactor(newVote[2], config[2])
				this.setFinalFactor(newVote[3], config[3])
				clearInterval(intervalHandle)
			}

			subject.next(newVote)

			// page.set({factorDelta: page.get().factorDelta + 1})
		}, 17)

		return subject
	}

	private getTweenVoteFactor(
		vote,
		lastVote,
		factorNumber
	): ITweenVoteFactor {
		return {
			factorNumber,
			outcome: vote[factorNumber].outcome,
			tweenOutcome: lastVote[factorNumber].outcome,
			tweenValue: lastVote[factorNumber].value,
			value: vote[factorNumber].value
		}
	}

	private runFactorTween(
		config: IFactorFrameConfig,
		numRemainingFrames: NumberOfFrames
	): void {
		config.newDirFrameNumber++

		const {
			      newDirFrameNumber,
			      newVoteFactor,
			      newVoteValue,
			      numNewDirFrames,
			      numOldDirFrames,
			      numRemainingOldDirFrames,
			      oldVoteFactor,
			      oldVoteValue,
			      zeroValueFrameNumber
		      } = config

		if (zeroValueFrameNumber) {
			if (newVoteFactor.outcome
				&& numRemainingFrames === zeroValueFrameNumber) {
				newVoteFactor.tweenValue   = 0
				newVoteFactor.tweenOutcome = newVoteFactor.outcome
			} else if (!newVoteFactor.outcome
				|| numRemainingFrames > zeroValueFrameNumber) {
				// Always go here if the factor is being removed (dir === 0)
				newVoteFactor.tweenValue   = Math.floor(oldVoteValue
					/ numOldDirFrames * numRemainingOldDirFrames) as VoteFactor_Value
				newVoteFactor.tweenOutcome = oldVoteFactor.outcome
			} else {
				newVoteFactor.tweenValue   = Math.floor(newVoteValue
					/ numNewDirFrames * newDirFrameNumber) as VoteFactor_Value
				newVoteFactor.tweenOutcome = newVoteFactor.outcome
			}
		} else {
			const factorValue          = oldVoteValue + ((newVoteValue - oldVoteValue)
				/ numNewDirFrames * newDirFrameNumber)
			newVoteFactor.tweenValue   = newVoteValue > oldVoteValue
				? Math.floor(factorValue) as VoteFactor_Value
				: Math.ceil(factorValue) as VoteFactor_Value
			newVoteFactor.tweenOutcome = newVoteFactor.outcome
		}

		config.numRemainingOldDirFrames--
	}

	// if(!newVoteFactor.dir) {
	private setFinalFactor(
		newVoteFactor: ITweenVoteFactor,
		outcomeConfig: IFactorConfig
	): void {
		newVoteFactor.tweenOutcome = outcomeConfig.newVoteFactor.outcome
		// }
		newVoteFactor.tweenValue   = outcomeConfig.newVoteFactor.value
	}

	private setupFactorTween(
		factorNumber: Factor_Number,
		oldVote: IVote,
		newVote: ITweenVote,
		numFrames: NumberOfFrames
	): IFactorFrameConfig {

		const oldVoteFactor: IVoteFactor      = oldVote[factorNumber]
		const newVoteFactor: ITweenVoteFactor = newVote[factorNumber]

		const oldVoteValue: VoteFactor_Value = oldVoteFactor.value
		const newVoteValue: VoteFactor_Value = newVoteFactor.value

		let zeroValueFrameNumber: FrameNumber        = 0
		let numNewDirFrames: NumberOfFrames
		let numOldDirFrames: NumberOfFrames          = 0
		let newDirFrameNumber: FrameNumber           = 0
		let numRemainingOldDirFrames: NumberOfFrames = 0
		if (oldVoteFactor.outcome !== newVoteFactor.outcome) {
			const valueDifference      = oldVoteValue + newVoteValue
			const oldVoteFraction      = oldVoteValue / valueDifference
			numOldDirFrames            = zeroValueFrameNumber = Math.ceil(numFrames * oldVoteFraction)
			numRemainingOldDirFrames   = numOldDirFrames
			numNewDirFrames            = numFrames - numOldDirFrames
			newDirFrameNumber          = -numOldDirFrames
			newVoteFactor.tweenOutcome = oldVoteFactor.outcome
		} else {
			numNewDirFrames            = numFrames
			newVoteFactor.tweenOutcome = newVoteFactor.outcome
		}

		return {
			newDirFrameNumber,
			newVoteFactor,
			newVoteValue,
			numNewDirFrames,
			numOldDirFrames,
			numRemainingOldDirFrames,
			oldVoteFactor,
			oldVoteValue,
			zeroValueFrameNumber
		}
	}

}

DI.set(POLL_MAIN_LOGIC, PollMainLogic)
