import {
	IImmutableActorRow,
} from '../../infrastructure/immutableactorrow';
import {
	ILabel,
} from './label/label';
import {
	IPollVariation,
} from './pollvariation';
import {
	IPollLocationTimeFrame,
} from '../locationtimeframe/polllocationtimeframe';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariationLabel extends IImmutableActorRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;

	// Non-Id Relations
	label?: ILabel;
	pollVariation?: IPollVariation;
	locationTimeFrame?: IPollLocationTimeFrame;

	// Transient Properties

	// Public Methods
	
}


