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
	IPollOpinionVersion,
	PollOpinionVersionECascadeGraph,
	PollOpinionVersionEId,
	PollOpinionVersionEOptionalId,
	PollOpinionVersionEUpdateProperties,
	PollOpinionVersionESelect,
	QPollOpinionVersion,
	QPollOpinionVersionQId,
	QPollOpinionVersionQRelation,
} from '../qpollopinionversion';
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

export interface IPollOpinionVersionRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	pollOpinionVersion?: IPollOpinionVersion;
	rating?: IRating;
	parent?: IPollOpinionVersionRating;
	child?: IPollOpinionVersionRating[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollOpinionVersionRatingESelect
    extends ImmutableActorRowESelect, PollOpinionVersionRatingEOptionalId {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollOpinionVersion?: PollOpinionVersionESelect;
	rating?: RatingESelect;
	parent?: PollOpinionVersionRatingESelect;
	child?: PollOpinionVersionRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollOpinionVersionRatingEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollOpinionVersionRatingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollOpinionVersionRatingEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Non-Id Relations - ids only & no OneToMany's
	pollOpinionVersion?: PollOpinionVersionEOptionalId;
	rating?: RatingEOptionalId;
	parent?: PollOpinionVersionRatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollOpinionVersionRatingECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	child?: PollOpinionVersionRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollOpinionVersionRatingEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_OPINION_VERSION_RATING_IS_CURRENT?: boolean | IQBooleanField;
	POLL_OPINION_VERSION_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;
	PARENT_POLL_OPINION_VERSION_RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollOpinionVersionRatingECreateProperties
extends Partial<PollOpinionVersionRatingEId>, PollOpinionVersionRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollOpinionVersionRatingECreateColumns
extends PollOpinionVersionRatingEId, PollOpinionVersionRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollOpinionVersionRating extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	isCurrent: IQBooleanField;

	// Non-Id Relations
	pollOpinionVersion: QPollOpinionVersionQRelation;
	rating: QRatingQRelation;
	parent: QPollOpinionVersionRatingQRelation;
	child: IQOneToManyRelation<QPollOpinionVersionRating>;

}


// Entity Id Interface
export interface QPollOpinionVersionRatingQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollOpinionVersionRatingQRelation
	extends QImmutableActorRowQRelation<QPollOpinionVersionRating>, QPollOpinionVersionRatingQId {
}

