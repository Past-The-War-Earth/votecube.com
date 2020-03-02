import {
	ISystemGeneratedRow,
} from '../../infrastructure/row/systemgeneratedrow';
import {
	IPoll,
} from '../poll';
import {
	IPollRevision,
} from '../revision/pollrevision';
import {
	ILanguage,
} from '../../infrastructure/language';
import {
	IChosenPollTranslationType,
} from './chosenpolltranslationtype';
import {
	IPollRevisionTranslation,
} from '../revision/translation/pollrevisiontranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IChosenPollTranslation extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	poll?: IPoll;
	pollRevision?: IPollRevision;
	language?: ILanguage;
	type?: IChosenPollTranslationType;
	revisionTranslation?: IPollRevisionTranslation[];

	// Transient Properties

	// Public Methods
	
}


