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
} from '../../infrastructure/row/qimmutablerow';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from './qpollrevision';
import {
	FactorPositionECascadeGraph,
	FactorPositionEId,
	FactorPositionEOptionalId,
	FactorPositionEUpdateProperties,
	FactorPositionESelect,
	QFactorPosition,
	QFactorPositionQId,
	QFactorPositionQRelation,
} from '../../factor/position/qfactorposition';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionFactorPositionESelect
    extends ImmutableRowESelect, PollRevisionFactorPositionEOptionalId {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;
	factorPosition?: FactorPositionESelect;
	parent?: PollRevisionFactorPositionESelect;
	children?: PollRevisionFactorPositionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionFactorPositionEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionFactorPositionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionFactorPositionEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;
	factorPosition?: FactorPositionEOptionalId;
	parent?: PollRevisionFactorPositionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionFactorPositionECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	children?: PollRevisionFactorPositionECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionFactorPositionEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	FACTOR_COORDINATE_AXIS?: string | IQStringField;
	POSITION_ORIENTATION?: number | IQNumberField;
	POLL_REVISION_ID?: number | IQNumberField;
	FACTOR_ID?: number | IQNumberField;
	POSITION_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_FACTOR_POSITION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionFactorPositionECreateProperties
extends Partial<PollRevisionFactorPositionEId>, PollRevisionFactorPositionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionFactorPositionECreateColumns
extends PollRevisionFactorPositionEId, PollRevisionFactorPositionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionFactorPosition extends QImmutableRow
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
	parent: QPollRevisionFactorPositionQRelation;
	children: IQOneToManyRelation<QPollRevisionFactorPosition>;

}


// Entity Id Interface
export interface QPollRevisionFactorPositionQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionFactorPositionQRelation
	extends QImmutableRowQRelation<QPollRevisionFactorPosition>, QPollRevisionFactorPositionQId {
}

