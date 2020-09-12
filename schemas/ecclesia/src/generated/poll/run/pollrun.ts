import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	IPollRevision,
} from '../revision/pollrevision';
import {
	IPollRunContinent,
} from './location/pollruncontinent';
import {
	IPollRunCountry,
} from './location/pollruncountry';
import {
	IPollRunState,
} from './location/pollrunstate';
import {
	IPollRunCounty,
} from './location/pollruncounty';
import {
	IPollRunTown,
} from './location/pollruntown';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRun extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	endDate?: Date;
	startDate?: Date;

	// Non-Id Relations
	pollRevision?: IPollRevision;
	createdAtRevisions?: IPollRevision[];
	pollContinents?: IPollRunContinent[];
	pollCountries?: IPollRunCountry[];
	pollStates?: IPollRunState[];
	pollCounties?: IPollRunCounty[];
	pollTowns?: IPollRunTown[];

	// Transient Properties

	// Public Methods
	
}


