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
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../../poll/revision/qpollrevision';
import {
	PositionTranslationECascadeGraph,
	PositionTranslationEId,
	PositionTranslationEOptionalId,
	PositionTranslationEUpdateProperties,
	PositionTranslationESelect,
	QPositionTranslation,
	QPositionTranslationQId,
	QPositionTranslationQRelation,
} from './qpositiontranslation';
import {
	FactorPositionECascadeGraph,
	FactorPositionEId,
	FactorPositionEOptionalId,
	FactorPositionEUpdateProperties,
	FactorPositionESelect,
	QFactorPosition,
	QFactorPositionQId,
	QFactorPositionQRelation,
} from './qfactorposition';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionESelect
    extends ImmutableActorRowESelect, PositionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	createdAtPollRevision?: PollRevisionESelect;
	parentTranslation?: PositionTranslationESelect;
	parent?: PositionESelect;
	children?: PositionESelect;
	factorPositions?: FactorPositionESelect;
	translations?: PositionTranslationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PositionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	createdAtPollRevision?: PollRevisionEOptionalId;
	parentTranslation?: PositionTranslationEOptionalId;
	parent?: PositionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: PositionECascadeGraph;
	factorPositions?: FactorPositionECascadeGraph;
	translations?: PositionTranslationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_REVISION_ID?: number | IQNumberField;
	PARENT_POSITION_TRANSLATION_ID?: number | IQNumberField;
	PARENT_POSITION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionECreateProperties
extends Partial<PositionEId>, PositionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionECreateColumns
extends PositionEId, PositionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPosition extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	createdAtPollRevision: QPollRevisionQRelation;
	parentTranslation: QPositionTranslationQRelation;
	parent: QPositionQRelation;
	children: IQOneToManyRelation<QPosition>;
	factorPositions: IQOneToManyRelation<QFactorPosition>;
	translations: IQOneToManyRelation<QPositionTranslation>;

}


// Entity Id Interface
export interface QPositionQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPositionQRelation
	extends QImmutableActorRowQRelation<QPosition>, QPositionQId {
}

