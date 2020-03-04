import {
	IOutcomeTranslation,
} from './translation/outcometranslation';
import {
	IPollRevision,
} from './pollrevision';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IOutcome {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	parentTranslation?: IOutcomeTranslation;
	parent?: IOutcome;
	children?: IOutcome[];
	pollRevisionsA?: IPollRevision[];
	pollRevisionsB?: IPollRevision[];

	// Transient Properties

	// Public Methods
	
}


