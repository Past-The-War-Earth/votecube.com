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

export interface IPositionOpinionVersionRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	positionOpinionVersion?: IPositionOpinionVersion;
	rating?: IRating;
	parent?: IPositionOpinionVersionRating;
	child?: IPositionOpinionVersionRating[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionOpinionVersionRatingESelect
    extends ImmutableActorRowESelect, PositionOpinionVersionRatingEOptionalId {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	positionOpinionVersion?: PositionOpinionVersionESelect;
	rating?: RatingESelect;
	parent?: PositionOpinionVersionRatingESelect;
	child?: PositionOpinionVersionRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionOpinionVersionRatingEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PositionOpinionVersionRatingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionOpinionVersionRatingEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Non-Id Relations - ids only & no OneToMany's
	positionOpinionVersion?: PositionOpinionVersionEOptionalId;
	rating?: RatingEOptionalId;
	parent?: PositionOpinionVersionRatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionOpinionVersionRatingECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	child?: PositionOpinionVersionRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionOpinionVersionRatingEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POSITION_OPINION_VERSION_RATING_IS_CURRENT?: boolean | IQBooleanField;
	POSITION_OPINION_VERSION_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;
	PARENT_POSITION_OPINION_VERSION_RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionOpinionVersionRatingECreateProperties
extends Partial<PositionOpinionVersionRatingEId>, PositionOpinionVersionRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionOpinionVersionRatingECreateColumns
extends PositionOpinionVersionRatingEId, PositionOpinionVersionRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionOpinionVersionRating extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	isCurrent: IQBooleanField;

	// Non-Id Relations
	positionOpinionVersion: QPositionOpinionVersionQRelation;
	rating: QRatingQRelation;
	parent: QPositionOpinionVersionRatingQRelation;
	child: IQOneToManyRelation<QPositionOpinionVersionRating>;

}


// Entity Id Interface
export interface QPositionOpinionVersionRatingQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPositionOpinionVersionRatingQRelation
	extends QImmutableActorRowQRelation<QPositionOpinionVersionRating>, QPositionOpinionVersionRatingQId {
}

