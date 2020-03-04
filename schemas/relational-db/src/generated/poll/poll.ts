import {
	IImmutableActorRow,
} from '../infrastructure/row/immutableactorrow';
import {
	ITheme,
} from './theme';
import {
	IPollType,
} from './polltype';
import {
	IPollRun,
} from './run/pollrun';
import {
	IPollRevision,
} from './revision/pollrevision';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPoll extends IImmutableActorRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	ageSuitability?: number;

	// Non-Id Relations
	theme?: ITheme;
	type?: IPollType;
	parent?: IPoll;
	children?: IPoll[];
	runs?: IPollRun[];
	revisions?: IPollRevision[];

	// Transient Properties

	// Public Methods
	
}


