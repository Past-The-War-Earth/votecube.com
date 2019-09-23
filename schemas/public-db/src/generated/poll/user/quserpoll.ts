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
	IMutableActorRow,
	MutableActorRowECascadeGraph,
	MutableActorRowEId,
	MutableActorRowEUpdateColumns,
	MutableActorRowEUpdateProperties,
	MutableActorRowESelect,
	QMutableActorRowQId,
	QMutableActorRowQRelation,
	QMutableActorRow,
} from '../../infrastructure/qmutableactorrow';
import {
	IPoll,
	PollECascadeGraph,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from '../qpoll';
import {
	IPollVariation,
	PollVariationECascadeGraph,
	PollVariationEId,
	PollVariationEOptionalId,
	PollVariationEUpdateProperties,
	PollVariationESelect,
	QPollVariation,
	QPollVariationQId,
	QPollVariationQRelation,
} from '../variation/qpollvariation';
import {
	IUserPollVariation,
	UserPollVariationECascadeGraph,
	UserPollVariationEId,
	UserPollVariationEOptionalId,
	UserPollVariationEUpdateProperties,
	UserPollVariationESelect,
	QUserPollVariation,
	QUserPollVariationQId,
	QUserPollVariationQRelation,
} from './quserpollvariation';
import {
	IUserPollRating,
	UserPollRatingECascadeGraph,
	UserPollRatingEId,
	UserPollRatingEOptionalId,
	UserPollRatingEUpdateProperties,
	UserPollRatingESelect,
	QUserPollRating,
	QUserPollRatingQId,
	QUserPollRatingQRelation,
} from './quserpollrating';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPoll extends IMutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	pinnedExplicitly?: boolean;

	// Non-Id Relations
	poll?: IPoll;
	pinnedVariation?: IPollVariation;
	userPollVariations?: IUserPollVariation[];
	ratings?: IUserPollRating[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface UserPollESelect
    extends MutableActorRowESelect, UserPollEOptionalId {
	// Non-Id Properties
	pinnedExplicitly?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	pinnedVariation?: PollVariationESelect;
	userPollVariations?: UserPollVariationESelect;
	ratings?: UserPollRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserPollEId
    extends MutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserPollEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserPollEUpdateProperties
	extends MutableActorRowEUpdateProperties {
	// Non-Id Properties
	pinnedExplicitly?: boolean | IQBooleanField;

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;
	pinnedVariation?: PollVariationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserPollECascadeGraph
	extends MutableActorRowECascadeGraph {
	// Cascading Relations
	userPollVariations?: UserPollVariationECascadeGraph;
	ratings?: UserPollRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserPollEUpdateColumns
	extends MutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	UPDATED_AT?: Date | IQDateField;
	USER_POLL_PINNED_EXPLICITLY?: boolean | IQBooleanField;
	POLL_ID?: number | IQNumberField;
	POLL_VARIATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserPollECreateProperties
extends Partial<UserPollEId>, UserPollEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserPollECreateColumns
extends UserPollEId, UserPollEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserPoll extends QMutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	pinnedExplicitly: IQBooleanField;

	// Non-Id Relations
	poll: QPollQRelation;
	pinnedVariation: QPollVariationQRelation;
	userPollVariations: IQOneToManyRelation<QUserPollVariation>;
	ratings: IQOneToManyRelation<QUserPollRating>;

}


// Entity Id Interface
export interface QUserPollQId extends QMutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QUserPollQRelation
	extends QMutableActorRowQRelation<QUserPoll>, QUserPollQId {
}

