import {
	IImmutableActorRow,
} from '../infrastructure/row/immutableactorrow';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISkin extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	backgroundColor?: number;
	textColor?: number;

	// Non-Id Relations
	parent?: ISkin;
	children?: ISkin[];

	// Transient Properties

	// Public Methods
	
}


