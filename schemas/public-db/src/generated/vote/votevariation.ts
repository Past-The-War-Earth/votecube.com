import {
	IImmutableActorRow,
} from '../infrastructure/immutableactorrow';
import {
	IPollVariation,
} from '../poll/variation/pollvariation';
import {
	IVote,
} from './vote';
import {
	IPollVariationTranslation,
} from '../poll/variation/translation/pollvariationtranslation';
import {
	IPollLocationTimeFrame,
} from '../poll/locationtimeframe/polllocationtimeframe';
import {
	IVoteFactor,
} from './votefactor';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IVoteVariation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	variation?: IPollVariation;
	vote?: IVote;
	variationTranslation?: IPollVariationTranslation;
	locationTimeFrame?: IPollLocationTimeFrame;
	factors?: IVoteFactor[];

	// Transient Properties

	// Public Methods
	
}


