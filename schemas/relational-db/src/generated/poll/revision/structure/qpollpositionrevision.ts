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
	ImmutableRowECascadeGraph,
	ImmutableRowEId,
	ImmutableRowEUpdateColumns,
	ImmutableRowEUpdateProperties,
	ImmutableRowESelect,
	QImmutableRowQId,
	QImmutableRowQRelation,
	QImmutableRow,
} from '../../../infrastructure/row/qimmutablerow';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../qpollrevision';
import {
	PositionECascadeGraph,
	PositionEId,
	PositionEOptionalId,
	PositionEUpdateProperties,
	PositionESelect,
	QPosition,
	QPositionQId,
	QPositionQRelation,
} from '../../../factor/position/qposition';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollPositionRevisionESelect
    extends ImmutableRowESelect, PollPositionRevisionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;
	position?: PositionESelect;
	parent?: PollPositionRevisionESelect;
	children?: PollPositionRevisionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollPositionRevisionEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollPositionRevisionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollPositionRevisionEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;
	position?: PositionEOptionalId;
	parent?: PollPositionRevisionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollPositionRevisionECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	children?: PollPositionRevisionECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollPositionRevisionEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_REVISION_ID?: number | IQNumberField;
	POSITION_ID?: number | IQNumberField;
	PARENT_POLL_POSITION_REVISION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollPositionRevisionECreateProperties
extends Partial<PollPositionRevisionEId>, PollPositionRevisionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollPositionRevisionECreateColumns
extends PollPositionRevisionEId, PollPositionRevisionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollPositionRevision extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollRevision: QPollRevisionQRelation;
	position: QPositionQRelation;
	parent: QPollPositionRevisionQRelation;
	children: IQOneToManyRelation<QPollPositionRevision>;

}


// Entity Id Interface
export interface QPollPositionRevisionQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollPositionRevisionQRelation
	extends QImmutableRowQRelation<QPollPositionRevision>, QPollPositionRevisionQId {
}

