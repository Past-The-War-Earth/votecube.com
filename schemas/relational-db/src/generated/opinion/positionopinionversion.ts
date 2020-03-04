import {
	IPollRevisionOpinion,
} from './pollrevisionopinion';
import {
	IPollRevisionFactorPosition,
} from '../poll/revision/pollrevisionfactorposition';
import {
	IPositionOpinionVersionTranslation,
} from './translation/positionopinionversiontranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPositionOpinionVersion {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevisionOpinion?: IPollRevisionOpinion;
	factorPosition?: IPollRevisionFactorPosition;
	parent?: IPositionOpinionVersion;
	children?: IPositionOpinionVersion[];
	translations?: IPositionOpinionVersionTranslation[];

	// Transient Properties

	// Public Methods
	
}


