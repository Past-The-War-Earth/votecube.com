import {
	IImmutableActorRow,
} from '../../../infrastructure/row/immutableactorrow';
import {
	IOutcome,
} from '../outcome';
import {
	ILanguage,
} from '../../../infrastructure/language';
import {
	ITranslationType,
} from '../../../infrastructure/translationtype';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IOutcomeTranslation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	outcomeVersion?: IOutcome;
	language?: ILanguage;
	type?: ITranslationType;
	parent?: IOutcomeTranslation;
	children?: IOutcomeTranslation[];

	// Transient Properties

	// Public Methods
	
}


