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
	FactorPositionECascadeGraph,
	FactorPositionEId,
	FactorPositionEOptionalId,
	FactorPositionEUpdateProperties,
	FactorPositionESelect,
	QFactorPosition,
	QFactorPositionQId,
	QFactorPositionQRelation,
} from '../../../factor/position/qfactorposition';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollFactorPositionRevisionESelect
    extends ImmutableRowESelect, PollFactorPositionRevisionEOptionalId {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;
	factorPosition?: FactorPositionESelect;
	parent?: PollFactorPositionRevisionESelect;
	children?: PollFactorPositionRevisionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollFactorPositionRevisionEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollFactorPositionRevisionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollFactorPositionRevisionEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;
	factorPosition?: FactorPositionEOptionalId;
	parent?: PollFactorPositionRevisionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollFactorPositionRevisionECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	children?: PollFactorPositionRevisionECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollFactorPositionRevisionEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	FACTOR_COORDINATE_AXIS?: string | IQStringField;
	POSITION_ORIENTATION?: number | IQNumberField;
	POLL_REVISION_ID?: number | IQNumberField;
	FACTOR_POSITION_ID?: number | IQNumberField;
	PARENT_POLL_FACTOR_POSITION_REVISION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollFactorPositionRevisionECreateProperties
extends Partial<PollFactorPositionRevisionEId>, PollFactorPositionRevisionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollFactorPositionRevisionECreateColumns
extends PollFactorPositionRevisionEId, PollFactorPositionRevisionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollFactorPositionRevision extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	axis: IQStringField;
	dir: IQNumberField;

	// Non-Id Relations
	pollRevision: QPollRevisionQRelation;
	factorPosition: QFactorPositionQRelation;
	parent: QPollFactorPositionRevisionQRelation;
	children: IQOneToManyRelation<QPollFactorPositionRevision>;

}


// Entity Id Interface
export interface QPollFactorPositionRevisionQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollFactorPositionRevisionQRelation
	extends QImmutableRowQRelation<QPollFactorPositionRevision>, QPollFactorPositionRevisionQId {
}

