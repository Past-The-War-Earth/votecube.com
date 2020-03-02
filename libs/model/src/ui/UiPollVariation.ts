import {
	IsData,
	IsDelta
}                                 from '../core/common'
import {IVersioned}               from '../core/PathFragment'
import {
	Poll_Id,
	Poll_Name
}                                 from '../core/Poll'
import {Variation_Id}            from '../core/Variation'
import {UiDocStatus}              from './common'
import {IUiAgeSuitabilityTracked} from './UiDocumentValue'
import {
	IUiFactor,
	IUiFactorFromForm
}                                 from './UiFactor'
import {
	IUiOutcome,
	IUiOutcomeFromForm
}                                 from './UiOutcome'
import {
	IUiTheme,
	IUiThemeFromForm
}                                 from './UiTheme'

export interface IUiPollVariation
	extends IUiPollVariationCore<IsData> {
}

export interface IUiPollVariationDelta
	extends IUiPollVariationCore<IsDelta> {
}

export interface IUiPollVariationCore<Doc extends UiDocStatus>
	extends IUiAgeSuitabilityTracked<Doc>,
	        IUiVariationFromForm<Doc>,
	        IVersioned<Variation_Id> {

	factors: {
		1: IUiFactor<Doc>
		2: IUiFactor<Doc>
		3: IUiFactor<Doc>
	}
	outcomes: {
		A: IUiOutcome<Doc>
		B: IUiOutcome<Doc>
	}
	pollId: Poll_Id
	theme: IUiTheme<Doc>

}

export interface IUiVariationFromForm<Doc extends UiDocStatus = IsData> {

	factors: {
		1: IUiFactorFromForm<Doc>
		2: IUiFactorFromForm<Doc>
		3: IUiFactorFromForm<Doc>
	}
	name: Doc extends IsDelta ? boolean : Poll_Name
	outcomes: {
		A: IUiOutcomeFromForm<Doc>
		B: IUiOutcomeFromForm<Doc>
	}
	theme: IUiThemeFromForm

}
