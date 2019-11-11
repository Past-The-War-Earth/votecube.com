import {FactorNumber}   from './core/Factor'
import {OutcomeOrdinal} from './core/Outcome'

export type VoteValue = number

export interface IVoteFactor {

	factorNumber: FactorNumber
	outcome: OutcomeOrdinal
	value: VoteValue

}


export interface ITweenVoteFactor
	extends IVoteFactor {

	// tweenAxis: FactorAxis
	tweenOutcome: OutcomeOrdinal
	tweenValue: VoteValue

}
