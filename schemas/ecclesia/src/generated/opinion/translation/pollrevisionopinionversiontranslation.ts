import {
	ISystemGeneratedRow,
} from '../../infrastructure/row/systemgeneratedrow';
import {
	IPollRevisionOpinionVersion,
} from '../pollrevisionopinionversion';
import {
	ILanguage,
} from '../../infrastructure/language';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionOpinionVersionTranslation extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	original?: boolean;
	title?: string;
	text?: string;

	// Non-Id Relations
	opinionVersion?: IPollRevisionOpinionVersion;
	language?: ILanguage;

	// Transient Properties

	// Public Methods
	
}


