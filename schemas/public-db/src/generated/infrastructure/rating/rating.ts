import {
	ISystemGeneratedRow,
} from '../systemgeneratedrow';
import {
	IRatingType,
} from './ratingtype';
import {
	IRatingSetting,
} from './ratingsetting';
import {
	IRatingTranslation,
} from './ratingtranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IRating extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	cssClass?: string;

	// Non-Id Relations
	type?: IRatingType;
	settings?: IRatingSetting[];
	translations?: IRatingTranslation[];

	// Transient Properties

	// Public Methods
	
}


