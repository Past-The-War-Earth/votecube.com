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
	ImmutableActorRowECascadeGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../../infrastructure/row/qimmutableactorrow';
import {
	PollRevisionOpinionVersionECascadeGraph,
	PollRevisionOpinionVersionEId,
	PollRevisionOpinionVersionEOptionalId,
	PollRevisionOpinionVersionEUpdateProperties,
	PollRevisionOpinionVersionESelect,
	QPollRevisionOpinionVersion,
	QPollRevisionOpinionVersionQId,
	QPollRevisionOpinionVersionQRelation,
} from '../qpollrevisionopinionversion';
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
export interface PollRevisionOpinionVersionRatingESelect
    extends ImmutableActorRowESelect, PollRevisionOpinionVersionRatingEOptionalId {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevisionOpinionVersion?: PollRevisionOpinionVersionESelect;
	rating?: RatingESelect;
	parent?: PollRevisionOpinionVersionRatingESelect;
	child?: PollRevisionOpinionVersionRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionVersionRatingEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionVersionRatingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionRatingEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Non-Id Relations - ids only & no OneToMany's
	pollRevisionOpinionVersion?: PollRevisionOpinionVersionEOptionalId;
	rating?: RatingEOptionalId;
	parent?: PollRevisionOpinionVersionRatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionVersionRatingECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	child?: PollRevisionOpinionVersionRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionVersionRatingEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	IS_CURRENT?: boolean | IQBooleanField;
	POLL_REVISION_OPINION_VERSION_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_OPINION_VERSION_RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionVersionRatingECreateProperties
extends Partial<PollRevisionOpinionVersionRatingEId>, PollRevisionOpinionVersionRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionVersionRatingECreateColumns
extends PollRevisionOpinionVersionRatingEId, PollRevisionOpinionVersionRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinionVersionRating extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	isCurrent: IQBooleanField;

	// Non-Id Relations
	pollRevisionOpinionVersion: QPollRevisionOpinionVersionQRelation;
	rating: QRatingQRelation;
	parent: QPollRevisionOpinionVersionRatingQRelation;
	child: IQOneToManyRelation<QPollRevisionOpinionVersionRating>;

}


// Entity Id Interface
export interface QPollRevisionOpinionVersionRatingQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionOpinionVersionRatingQRelation
	extends QImmutableActorRowQRelation<QPollRevisionOpinionVersionRating>, QPollRevisionOpinionVersionRatingQId {
}

