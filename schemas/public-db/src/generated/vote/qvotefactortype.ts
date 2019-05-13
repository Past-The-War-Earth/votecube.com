import {
	IQEntityInternal,
	IEntityIdProperties,
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
	QEntity,
	QRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-control';
import {
	IReferenceRow,
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

	// Id Relations

	// Non-Id Properties
	id?: number;
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
	id?: number | IQNumberField;
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

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface VoteFactorTypeEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteFactorTypeEUpdateProperties
	extends ReferenceRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	value?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteFactorTypeEUpdateColumns
	extends ReferenceRowEUpdateColumns {
	// Non-Id Columns
	VOTE_FACTOR_TYPE_ID?: number | IQNumberField;
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

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	value: IQStringField;

	// Non-Id Relations

}


// Entity Id Interface
export interface QVoteFactorTypeQId extends QReferenceRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QVoteFactorTypeQRelation
	extends QReferenceRowQRelation<QVoteFactorType>, QVoteFactorTypeQId {
}

