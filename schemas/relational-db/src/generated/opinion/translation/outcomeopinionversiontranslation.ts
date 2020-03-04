import {
	ISystemGeneratedRow,
} from '../../infrastructure/row/systemgeneratedrow';
import {
	IOutcomeOpinionVersion,
} from '../outcomeopinionversion';
import {
	ILanguage,
} from '../../infrastructure/language';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IOutcomeOpinionVersionTranslation extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	original?: boolean;
	title?: string;
	text?: string;

	// Non-Id Relations
	outcomeOpinionVersion?: IOutcomeOpinionVersion;
	language?: ILanguage;

	// Transient Properties

	// Public Methods
	
}


