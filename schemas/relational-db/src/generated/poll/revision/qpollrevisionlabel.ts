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
	LabelECascadeGraph,
	LabelEId,
	LabelEOptionalId,
	LabelEUpdateProperties,
	LabelESelect,
	QLabel,
	QLabelQId,
	QLabelQRelation,
} from './label/qlabel';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from './qpollrevision';
import {
	PollRunECascadeGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../run/qpollrun';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionLabelESelect
    extends ImmutableActorRowESelect, PollRevisionLabelEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	label?: LabelESelect;
	pollRevision?: PollRevisionESelect;
	run?: PollRunESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionLabelEId
    extends ImmutableActorRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionLabelEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionLabelEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	label?: LabelEOptionalId;
	pollRevision?: PollRevisionEOptionalId;
	run?: PollRunEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionLabelECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionLabelEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_REVISION_LABEL_ID?: number | IQNumberField;
	LABEL_ID?: number | IQNumberField;
	POLL_REVISION_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionLabelECreateProperties
extends Partial<PollRevisionLabelEId>, PollRevisionLabelEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionLabelECreateColumns
extends PollRevisionLabelEId, PollRevisionLabelEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionLabel extends QImmutableActorRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;

	// Non-Id Relations
	label: QLabelQRelation;
	pollRevision: QPollRevisionQRelation;
	run: QPollRunQRelation;

}


// Entity Id Interface
export interface QPollRevisionLabelQId extends QImmutableActorRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionLabelQRelation
	extends QImmutableActorRowQRelation<QPollRevisionLabel>, QPollRevisionLabelQId {
}

