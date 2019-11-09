import {
	IMutableActorRow,
} from '../infrastructure/mutableactorrow';
import {
	IPoll,
} from '../poll/poll';
import {
	IPollOpinionVersion,
} from './pollopinionversion';
import {
	IPollOpinionRatingCount,
} from './count/pollopinionratingcount';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollOpinion extends IMutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	numberOfVersions?: number;

	// Non-Id Relations
	poll?: IPoll;
	firstVersion?: IPollOpinionVersion;
	lastVersion?: IPollOpinionVersion;
	parent?: IPollOpinion;
	children?: IPollOpinion[];
	versions?: IPollOpinionVersion[];
	ratingCounts?: IPollOpinionRatingCount[];

	// Transient Properties

	// Public Methods
	
}


