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
	MutableActorRowECascadeGraph,
	MutableActorRowEId,
	MutableActorRowEUpdateColumns,
	MutableActorRowEUpdateProperties,
	MutableActorRowESelect,
	QMutableActorRowQId,
	QMutableActorRowQRelation,
	QMutableActorRow,
} from '../infrastructure/row/qmutableactorrow';
import {
	PollECascadeGraph,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from '../poll/qpoll';
import {
	PollOpinionVersionECascadeGraph,
	PollOpinionVersionEId,
	PollOpinionVersionEOptionalId,
	PollOpinionVersionEUpdateProperties,
	PollOpinionVersionESelect,
	QPollOpinionVersion,
	QPollOpinionVersionQId,
	QPollOpinionVersionQRelation,
} from './qpollopinionversion';
import {
	PollOpinionRatingCountECascadeGraph,
	PollOpinionRatingCountEId,
	PollOpinionRatingCountEOptionalId,
	PollOpinionRatingCountEUpdateProperties,
	PollOpinionRatingCountESelect,
	QPollOpinionRatingCount,
	QPollOpinionRatingCountQId,
	QPollOpinionRatingCountQRelation,
} from './count/qpollopinionratingcount';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollOpinionESelect
    extends MutableActorRowESelect, PollOpinionEOptionalId {
	// Non-Id Properties
	numberOfVersions?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	firstVersion?: PollOpinionVersionESelect;
	lastVersion?: PollOpinionVersionESelect;
	parent?: PollOpinionESelect;
	children?: PollOpinionESelect;
	versions?: PollOpinionVersionESelect;
	ratingCounts?: PollOpinionRatingCountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollOpinionEId
    extends MutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollOpinionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollOpinionEUpdateProperties
	extends MutableActorRowEUpdateProperties {
	// Non-Id Properties
	numberOfVersions?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;
	firstVersion?: PollOpinionVersionEOptionalId;
	lastVersion?: PollOpinionVersionEOptionalId;
	parent?: PollOpinionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollOpinionECascadeGraph
	extends MutableActorRowECascadeGraph {
	// Cascading Relations
	children?: PollOpinionECascadeGraph;
	versions?: PollOpinionVersionECascadeGraph;
	ratingCounts?: PollOpinionRatingCountECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollOpinionEUpdateColumns
	extends MutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	UPDATED_AT?: Date | IQDateField;
	NUMBER_OF_VERSIONS?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	FIRST_POLL_OPINION_VERSION_ID?: number | IQNumberField;
	LAST_POLL_OPINION_VERSION_ID?: number | IQNumberField;
	PARENT_POLL_OPINION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollOpinionECreateProperties
extends Partial<PollOpinionEId>, PollOpinionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollOpinionECreateColumns
extends PollOpinionEId, PollOpinionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollOpinion extends QMutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	numberOfVersions: IQNumberField;

	// Non-Id Relations
	poll: QPollQRelation;
	firstVersion: QPollOpinionVersionQRelation;
	lastVersion: QPollOpinionVersionQRelation;
	parent: QPollOpinionQRelation;
	children: IQOneToManyRelation<QPollOpinion>;
	versions: IQOneToManyRelation<QPollOpinionVersion>;
	ratingCounts: IQOneToManyRelation<QPollOpinionRatingCount>;

}


// Entity Id Interface
export interface QPollOpinionQId extends QMutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollOpinionQRelation
	extends QMutableActorRowQRelation<QPollOpinion>, QPollOpinionQId {
}

