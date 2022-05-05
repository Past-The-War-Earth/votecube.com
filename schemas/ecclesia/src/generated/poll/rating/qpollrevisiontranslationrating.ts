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
} from '@airport/air-traffic-control';
import {
	ImmutableActorRowGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../../infrastructure/row/qimmutableactorrow';
import {
	PollRunGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../run/qpollrun';
import {
	PollRun,
} from '../../../ddl/poll/run/PollRun';
import {
	RatingGraph,
	RatingEId,
	RatingEOptionalId,
	RatingEUpdateProperties,
	RatingESelect,
	QRating,
	QRatingQId,
	QRatingQRelation,
} from '../../infrastructure/rating/qrating';
import {
	Rating,
} from '../../../ddl/infrastructure/rating/Rating';
import {
	PollRevisionTranslationRating,
} from '../../../ddl/poll/rating/PollRevisionTranslationRating';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionTranslationRatingESelect
    extends ImmutableActorRowESelect, PollRevisionTranslationRatingEOptionalId {
	// Non-Id Properties
	value?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	run?: PollRunESelect;
	rating?: RatingESelect;
	parent?: PollRevisionTranslationRatingESelect;
	child?: PollRevisionTranslationRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionTranslationRatingEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionTranslationRatingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionTranslationRatingEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	value?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	run?: PollRunEOptionalId;
	rating?: RatingEOptionalId;
	parent?: PollRevisionTranslationRatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionTranslationRatingGraph
	extends PollRevisionTranslationRatingEOptionalId, ImmutableActorRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	value?: number | IQNumberField;

	// Relations
	run?: PollRunGraph;
	rating?: RatingGraph;
	parent?: PollRevisionTranslationRatingGraph;
	child?: PollRevisionTranslationRatingGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionTranslationRatingEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	VALUE?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_TRANSLATION_RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionTranslationRatingECreateProperties
extends Partial<PollRevisionTranslationRatingEId>, PollRevisionTranslationRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionTranslationRatingECreateColumns
extends PollRevisionTranslationRatingEId, PollRevisionTranslationRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionTranslationRating extends QImmutableActorRow<PollRevisionTranslationRating>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	value: IQNumberField;

	// Non-Id Relations
	run: QPollRunQRelation;
	rating: QRatingQRelation;
	parent: QPollRevisionTranslationRatingQRelation;
	child: IQOneToManyRelation<PollRevisionTranslationRating, QPollRevisionTranslationRating>;

}


// Entity Id Interface
export interface QPollRevisionTranslationRatingQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionTranslationRatingQRelation
	extends QImmutableActorRowQRelation<PollRevisionTranslationRating, QPollRevisionTranslationRating>, QPollRevisionTranslationRatingQId {
}

