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
	SystemGeneratedRowECascadeGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../../infrastructure/row/qsystemgeneratedrow';
import {
	FactorOpinionVersionECascadeGraph,
	FactorOpinionVersionEId,
	FactorOpinionVersionEOptionalId,
	FactorOpinionVersionEUpdateProperties,
	FactorOpinionVersionESelect,
	QFactorOpinionVersion,
	QFactorOpinionVersionQId,
	QFactorOpinionVersionQRelation,
} from '../qfactoropinionversion';
import {
	RatingECascadeGraph,
	RatingEId,
	RatingEOptionalId,
	RatingEUpdateProperties,
	RatingESelect,
	QRating,
	QRatingQId,
	QRatingQRelation,
} from '../../infrastructure/rating/qrating';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorOpinionVersionRatingCountESelect
    extends SystemGeneratedRowESelect, FactorOpinionVersionRatingCountEOptionalId {
	// Non-Id Properties
	count?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	factorOpinionVersion?: FactorOpinionVersionESelect;
	rating?: RatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorOpinionVersionRatingCountEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorOpinionVersionRatingCountEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorOpinionVersionRatingCountEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	count?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	factorOpinionVersion?: FactorOpinionVersionEOptionalId;
	rating?: RatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorOpinionVersionRatingCountECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorOpinionVersionRatingCountEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	COUNT?: number | IQNumberField;
	FACTOR_OPINION_VERSION_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorOpinionVersionRatingCountECreateProperties
extends Partial<FactorOpinionVersionRatingCountEId>, FactorOpinionVersionRatingCountEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorOpinionVersionRatingCountECreateColumns
extends FactorOpinionVersionRatingCountEId, FactorOpinionVersionRatingCountEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorOpinionVersionRatingCount extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	count: IQNumberField;

	// Non-Id Relations
	factorOpinionVersion: QFactorOpinionVersionQRelation;
	rating: QRatingQRelation;

}


// Entity Id Interface
export interface QFactorOpinionVersionRatingCountQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorOpinionVersionRatingCountQRelation
	extends QSystemGeneratedRowQRelation<QFactorOpinionVersionRatingCount>, QFactorOpinionVersionRatingCountQId {
}

