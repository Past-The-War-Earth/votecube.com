import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	ILabel,
} from './label/label';
import {
	IPollRevision,
} from './pollrevision';
import {
	IPollRun,
} from '../run/pollrun';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionLabel extends IImmutableActorRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;

	// Non-Id Relations
	label?: ILabel;
	pollRevision?: IPollRevision;
	run?: IPollRun;

	// Transient Properties

	// Public Methods
	
}


