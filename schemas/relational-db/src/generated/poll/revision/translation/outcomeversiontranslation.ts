import {
	IImmutableActorRow,
} from '../../../infrastructure/row/immutableactorrow';
import {
	IOutcomeVersion,
} from '../outcomeversion';
import {
	ILanguage,
} from '../../../infrastructure/language';
import {
	ITranslationType,
} from '../../../infrastructure/translationtype';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IOutcomeVersionTranslation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	outcomeVersion?: IOutcomeVersion;
	language?: ILanguage;
	type?: ITranslationType;
	parent?: IOutcomeVersionTranslation;
	children?: IOutcomeVersionTranslation[];

	// Transient Properties

	// Public Methods
	
}


