import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	IPosition,
} from './position';
import {
	ILanguage,
} from '../../infrastructure/language';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPositionTranslation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	position?: IPosition;
	language?: ILanguage;
	parent?: IPositionTranslation;
	children?: IPositionTranslation[];

	// Transient Properties

	// Public Methods
	
}


