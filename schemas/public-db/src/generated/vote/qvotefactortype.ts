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
	IReferenceRow,
	ReferenceRowECascadeGraph,
	ReferenceRowEId,
	ReferenceRowEUpdateColumns,
	ReferenceRowEUpdateProperties,
	ReferenceRowESelect,
	QReferenceRowQId,
	QReferenceRowQRelation,
	QReferenceRow,
} from '@airport/holding-pattern';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IVoteFactorType extends IReferenceRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	value?: string;

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteFactorTypeESelect
    extends ReferenceRowESelect, VoteFactorTypeEOptionalId {
	// Non-Id Properties
	value?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteFactorTypeEId
    extends ReferenceRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface VoteFactorTypeEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteFactorTypeEUpdateProperties
	extends ReferenceRowEUpdateProperties {
	// Non-Id Properties
	value?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteFactorTypeECascadeGraph
	extends ReferenceRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteFactorTypeEUpdateColumns
	extends ReferenceRowEUpdateColumns {
	// Non-Id Columns
	VOTE_FACTOR_TYPE_VALUE?: string | IQStringField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteFactorTypeECreateProperties
extends Partial<VoteFactorTypeEId>, VoteFactorTypeEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteFactorTypeECreateColumns
extends VoteFactorTypeEId, VoteFactorTypeEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVoteFactorType extends QReferenceRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	value: IQStringField;

	// Non-Id Relations

}


// Entity Id Interface
export interface QVoteFactorTypeQId extends QReferenceRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QVoteFactorTypeQRelation
	extends QReferenceRowQRelation<QVoteFactorType>, QVoteFactorTypeQId {
}

