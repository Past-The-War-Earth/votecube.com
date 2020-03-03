import {
	IImmutableActorRow,
} from '../infrastructure/row/immutableactorrow';
import {
	IFactor,
} from './factor';
import {
	ILanguage,
} from '../infrastructure/language';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorTranslation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	factor?: IFactor;
	language?: ILanguage;
	parent?: IFactorTranslation;
	children?: IFactorTranslation[];
	childFactors?: IFactor[];

	// Transient Properties

	// Public Methods
	
}


