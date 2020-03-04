import {
	IPollRevisionOpinion,
} from './pollrevisionopinion';
import {
	IOutcome,
} from '../poll/revision/outcome';
import {
	IOutcomeOpinionVersionTranslation,
} from './translation/outcomeopinionversiontranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IOutcomeOpinionVersion {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevisionOpinion?: IPollRevisionOpinion;
	outcome?: IOutcome;
	parent?: IOutcomeOpinionVersion;
	children?: IOutcomeOpinionVersion[];
	translations?: IOutcomeOpinionVersionTranslation[];

	// Transient Properties

	// Public Methods
	
}


