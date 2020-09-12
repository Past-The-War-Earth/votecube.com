import {
	IImmutableRow,
} from '../infrastructure/row/immutablerow';
import {
	IPollRevisionOpinion,
} from './pollrevisionopinion';
import {
	IPollRevisionOpinionVersionTranslation,
} from './translation/pollrevisionopinionversiontranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionOpinionVersion extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevisionOpinion?: IPollRevisionOpinion;
	parent?: IPollRevisionOpinionVersion;
	children?: IPollRevisionOpinionVersion[];
	translations?: IPollRevisionOpinionVersionTranslation[];

	// Transient Properties

	// Public Methods
	
}


