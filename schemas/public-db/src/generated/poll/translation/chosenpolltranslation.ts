import {
	ISystemGeneratedRow,
} from '../../infrastructure/systemgeneratedrow';
import {
	IPoll,
} from '../poll';
import {
	IPollVariation,
} from '../variation/pollvariation';
import {
	ILanguage,
} from '../../infrastructure/language';
import {
	IChosenPollTranslationType,
} from './chosenpolltranslationtype';
import {
	IPollVariationTranslation,
} from '../variation/translation/pollvariationtranslation';



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
	pollVariation?: IPollVariation;
	language?: ILanguage;
	type?: IChosenPollTranslationType;
	variationTranslation?: IPollVariationTranslation[];

	// Transient Properties

	// Public Methods
	
}


