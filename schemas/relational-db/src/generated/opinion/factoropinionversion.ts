import {
	IPollRevisionOpinion,
} from './pollrevisionopinion';
import {
	IFactor,
} from '../factor/factor';
import {
	IFactorOpinionVersionTranslation,
} from './translation/factoropinionversiontranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorOpinionVersion {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevisionOpinion?: IPollRevisionOpinion;
	factor?: IFactor;
	parent?: IFactorOpinionVersion;
	children?: IFactorOpinionVersion[];
	translations?: IFactorOpinionVersionTranslation[];

	// Transient Properties

	// Public Methods
	
}


