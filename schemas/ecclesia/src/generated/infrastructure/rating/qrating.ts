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
	SystemGeneratedRowGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../row/qsystemgeneratedrow';
import {
	RatingTypeGraph,
	RatingTypeEId,
	RatingTypeEOptionalId,
	RatingTypeEUpdateProperties,
	RatingTypeESelect,
	QRatingType,
	QRatingTypeQId,
	QRatingTypeQRelation,
} from './qratingtype';
import {
	RatingSettingGraph,
	RatingSettingEId,
	RatingSettingEOptionalId,
	RatingSettingEUpdateProperties,
	RatingSettingESelect,
	QRatingSetting,
	QRatingSettingQId,
	QRatingSettingQRelation,
} from './qratingsetting';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface RatingESelect
    extends SystemGeneratedRowESelect, RatingEOptionalId {
	// Non-Id Properties
	cssClass?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	type?: RatingTypeESelect;
	settings?: RatingSettingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface RatingEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface RatingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface RatingEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	cssClass?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	type?: RatingTypeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface RatingGraph
	extends SystemGeneratedRowESelect, RatingEOptionalId, SystemGeneratedRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	cssClass?: string | IQStringField;

	// Relations
	type?: RatingTypeGraph;
	settings?: RatingSettingGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface RatingEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	RATING_CSS_CLASS?: string | IQStringField;
	RATING_TYPE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface RatingECreateProperties
extends Partial<RatingEId>, RatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface RatingECreateColumns
extends RatingEId, RatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QRating extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	cssClass: IQStringField;

	// Non-Id Relations
	type: QRatingTypeQRelation;
	settings: IQOneToManyRelation<QRatingSetting>;

}


// Entity Id Interface
export interface QRatingQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QRatingQRelation
	extends QSystemGeneratedRowQRelation<QRating>, QRatingQId {
}

