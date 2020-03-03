import {
	IPollRevision,
} from './pollrevision';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IOutcomeVersion {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	parent?: IOutcomeVersion;
	children?: IOutcomeVersion[];
	pollRevisionsA?: IPollRevision[];
	pollRevisionsB?: IPollRevision[];

	// Transient Properties

	// Public Methods
	
}


