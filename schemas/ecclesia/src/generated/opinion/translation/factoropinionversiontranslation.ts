import {
	ISystemGeneratedRow,
} from '../../infrastructure/row/systemgeneratedrow';
import {
	IFactorOpinionVersion,
} from '../factoropinionversion';
import {
	ILanguage,
} from '../../infrastructure/language';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorOpinionVersionTranslation extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	original?: boolean;
	title?: string;
	text?: string;

	// Non-Id Relations
	factorOpinionVersion?: IFactorOpinionVersion;
	language?: ILanguage;

	// Transient Properties

	// Public Methods
	
}


