import {
	IFullTextSearchDoc,
	Key
}                        from './common'
import {IDocumentValue}  from './DocumentValue'
import {
	FactorKey,
	IFactorBaseDoc
}                        from './Factor'
import {
	IOutcomeDoc,
	OutcomeKey
}                        from './Outcome'
import {PositionKey}     from './Position'
import {IThemeDoc}       from './Theme'
import {IUserCreatedDoc} from './User'
import {VariationKey}    from './Variation'

export type PollKey = Key

export interface IPollDoc<K extends Key = PollKey>
	extends IFullTextSearchDoc,
	        IUserCreatedDoc<K> {

	ageSuitability: IDocumentValue<number>
	factors: IPollFactors
	name: IDocumentValue<string>
	outcomes: IPollOutcomes
	rootVariationKey: VariationKey
	theme: IThemeDoc

}

export interface IPollFactors {
	1: IFactorBaseDoc
	2: IFactorBaseDoc
	3: IFactorBaseDoc
}

export interface IPollOutcomes {
	A: IOutcomeDoc
	B: IOutcomeDoc
}

export interface IFactorPollDoc
	extends IPollDoc {

	factorKey: FactorKey

}

export interface IOutcomePollDoc
	extends IPollDoc {

	outcomeKey: OutcomeKey

}

export interface IPositionPollDoc
	extends IPollDoc {

	positionKey: PositionKey

}
