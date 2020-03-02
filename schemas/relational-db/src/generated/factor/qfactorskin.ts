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
} from '../infrastructure/row/qimmutableactorrow';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../poll/revision/qpollrevision';
import {
	FactorECascadeGraph,
	FactorEId,
	FactorEOptionalId,
	FactorEUpdateProperties,
	FactorESelect,
	QFactor,
	QFactorQId,
	QFactorQRelation,
} from './qfactor';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorSkinESelect
    extends ImmutableActorRowESelect, FactorSkinEOptionalId {
	// Non-Id Properties
	backgroundColor?: number | IQNumberField;
	textColor?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;
	factor?: FactorESelect;
	parent?: FactorSkinESelect;
	children?: FactorSkinESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorSkinEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorSkinEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorSkinEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	backgroundColor?: number | IQNumberField;
	textColor?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;
	factor?: FactorEOptionalId;
	parent?: FactorSkinEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorSkinECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: FactorSkinECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorSkinEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	BACKGROUND_COLOR_ID?: number | IQNumberField;
	TEXT_COLOR_ID?: number | IQNumberField;
	POLL_REVISION_ID?: number | IQNumberField;
	FACTOR_ID?: number | IQNumberField;
	PARENT_FACTOR_SKIN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorSkinECreateProperties
extends Partial<FactorSkinEId>, FactorSkinEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorSkinECreateColumns
extends FactorSkinEId, FactorSkinEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorSkin extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	backgroundColor: IQNumberField;
	textColor: IQNumberField;

	// Non-Id Relations
	pollRevision: QPollRevisionQRelation;
	factor: QFactorQRelation;
	parent: QFactorSkinQRelation;
	children: IQOneToManyRelation<QFactorSkin>;

}


// Entity Id Interface
export interface QFactorSkinQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorSkinQRelation
	extends QImmutableActorRowQRelation<QFactorSkin>, QFactorSkinQId {
}

