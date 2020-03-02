import {
	ISystemGeneratedRow,
} from '../../infrastructure/row/systemgeneratedrow';
import {
	IPollOpinionVersion,
} from '../pollopinionversion';
import {
	ILanguage,
} from '../../infrastructure/language';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollOpinionVersionTranslation extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	original?: boolean;
	title?: string;
	text?: string;

	// Non-Id Relations
	pollOpinionVersion?: IPollOpinionVersion;
	language?: ILanguage;

	// Transient Properties

	// Public Methods
	
}


