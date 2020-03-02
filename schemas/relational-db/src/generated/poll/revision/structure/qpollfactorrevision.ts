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
	FactorECascadeGraph,
	FactorEId,
	FactorEOptionalId,
	FactorEUpdateProperties,
	FactorESelect,
	QFactor,
	QFactorQId,
	QFactorQRelation,
} from '../../../factor/qfactor';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollFactorRevisionESelect
    extends ImmutableRowESelect, PollFactorRevisionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;
	factor?: FactorESelect;
	parent?: PollFactorRevisionESelect;
	children?: PollFactorRevisionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollFactorRevisionEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollFactorRevisionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollFactorRevisionEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;
	factor?: FactorEOptionalId;
	parent?: PollFactorRevisionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollFactorRevisionECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	children?: PollFactorRevisionECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollFactorRevisionEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_REVISION_ID?: number | IQNumberField;
	FACTOR_ID?: number | IQNumberField;
	PARENT_POLL_FACTOR_REVISION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollFactorRevisionECreateProperties
extends Partial<PollFactorRevisionEId>, PollFactorRevisionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollFactorRevisionECreateColumns
extends PollFactorRevisionEId, PollFactorRevisionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollFactorRevision extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollRevision: QPollRevisionQRelation;
	factor: QFactorQRelation;
	parent: QPollFactorRevisionQRelation;
	children: IQOneToManyRelation<QPollFactorRevision>;

}


// Entity Id Interface
export interface QPollFactorRevisionQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollFactorRevisionQRelation
	extends QImmutableRowQRelation<QPollFactorRevision>, QPollFactorRevisionQId {
}

