import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ISituation,
} from './situation';
import {
	ILabel,
} from '../label';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituationLabel extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	situation?: ISituation;
	label?: ILabel;

	// Transient Properties

	// Public Methods
	
}


