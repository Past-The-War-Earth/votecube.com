import {FactorAxis}     from './core/Factor'
import {OutcomeOrdinal} from './core/Outcome'

export type VoteValue = number

export interface IVoteFactor {

	// axis: FactorAxis
	outcome: OutcomeOrdinal
	value: VoteValue

}


export interface ITweenVoteFactor
	extends IVoteFactor {

	// tweenAxis: FactorAxis
	tweenOutcome: OutcomeOrdinal
	tweenValue: VoteValue

}
