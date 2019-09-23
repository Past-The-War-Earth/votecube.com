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
	ISystemGeneratedRow,
	SystemGeneratedRowECascadeGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../../infrastructure/qsystemgeneratedrow';
import {
	IPositionOpinionVersion,
	PositionOpinionVersionECascadeGraph,
	PositionOpinionVersionEId,
	PositionOpinionVersionEOptionalId,
	PositionOpinionVersionEUpdateProperties,
	PositionOpinionVersionESelect,
	QPositionOpinionVersion,
	QPositionOpinionVersionQId,
	QPositionOpinionVersionQRelation,
} from '../qpositionopinionversion';
import {
	IRating,
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
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPositionOpinionVersionRatingCount extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	count?: number;

	// Non-Id Relations
	positionOpinionVersion?: IPositionOpinionVersion;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionOpinionVersionRatingCountESelect
    extends SystemGeneratedRowESelect, PositionOpinionVersionRatingCountEOptionalId {
	// Non-Id Properties
	count?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	positionOpinionVersion?: PositionOpinionVersionESelect;
	rating?: RatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionOpinionVersionRatingCountEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PositionOpinionVersionRatingCountEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionOpinionVersionRatingCountEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	count?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	positionOpinionVersion?: PositionOpinionVersionEOptionalId;
	rating?: RatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionOpinionVersionRatingCountECascadeGraph
	extends SystemGeneratedRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionOpinionVersionRatingCountEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	COUNT?: number | IQNumberField;
	POSITION_OPINION_VERSION_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionOpinionVersionRatingCountECreateProperties
extends Partial<PositionOpinionVersionRatingCountEId>, PositionOpinionVersionRatingCountEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionOpinionVersionRatingCountECreateColumns
extends PositionOpinionVersionRatingCountEId, PositionOpinionVersionRatingCountEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionOpinionVersionRatingCount extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	count: IQNumberField;

	// Non-Id Relations
	positionOpinionVersion: QPositionOpinionVersionQRelation;
	rating: QRatingQRelation;

}


// Entity Id Interface
export interface QPositionOpinionVersionRatingCountQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPositionOpinionVersionRatingCountQRelation
	extends QSystemGeneratedRowQRelation<QPositionOpinionVersionRatingCount>, QPositionOpinionVersionRatingCountQId {
}

