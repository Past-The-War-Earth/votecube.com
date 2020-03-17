import {
	IAgeSuitableRow,
} from '../../infrastructure/row/agesuitablerow';
import {
	IOutcomeTranslation,
} from './translation/outcometranslation';
import {
	IPollRevision,
} from './pollrevision';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IOutcome extends IAgeSuitableRow {
	
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


