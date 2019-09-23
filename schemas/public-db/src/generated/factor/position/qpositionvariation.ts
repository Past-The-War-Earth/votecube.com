import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
	IEntityDatabaseFacade,
	IEntityFind,
	IEntityFindOne,
	IEntitySearch,
	IEntitySearchOne,
	IQBooleanField,
	IQDateField,
	IQNumberField,
	IQOneToManyRelation,
	IQStringField,
	IQUntypedField,
	IQEntity,
	IQRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-control';
import {
	IImmutableActorRow,
	ImmutableActorRowECascadeGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../../infrastructure/qimmutableactorrow';
import {
	IPollVariation,
	PollVariationECascadeGraph,
	PollVariationEId,
	PollVariationEOptionalId,
	PollVariationEUpdateProperties,
	PollVariationESelect,
	QPollVariation,
	QPollVariationQId,
	QPollVariationQRelation,
} from '../../poll/variation/qpollvariation';
import {
	IPosition,
	PositionECascadeGraph,
	PositionEId,
	PositionEOptionalId,
	PositionEUpdateProperties,
	PositionESelect,
	QPosition,
	QPositionQId,
	QPositionQRelation,
} from './qposition';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPositionVariation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	createdAtPollVariation?: IPollVariation;
	position?: IPosition;
	parent?: IPositionVariation;
	children?: IPositionVariation[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionVariationESelect
    extends ImmutableActorRowESelect, PositionVariationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	createdAtPollVariation?: PollVariationESelect;
	position?: PositionESelect;
	parent?: PositionVariationESelect;
	children?: PositionVariationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionVariationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PositionVariationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionVariationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	createdAtPollVariation?: PollVariationEOptionalId;
	position?: PositionEOptionalId;
	parent?: PositionVariationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionVariationECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: PositionVariationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionVariationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_VARIATION_ID?: number | IQNumberField;
	POSITION_ID?: number | IQNumberField;
	PARENT_POSITION_VARIATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionVariationECreateProperties
extends Partial<PositionVariationEId>, PositionVariationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionVariationECreateColumns
extends PositionVariationEId, PositionVariationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionVariation extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	createdAtPollVariation: QPollVariationQRelation;
	position: QPositionQRelation;
	parent: QPositionVariationQRelation;
	children: IQOneToManyRelation<QPositionVariation>;

}


// Entity Id Interface
export interface QPositionVariationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPositionVariationQRelation
	extends QImmutableActorRowQRelation<QPositionVariation>, QPositionVariationQId {
}

