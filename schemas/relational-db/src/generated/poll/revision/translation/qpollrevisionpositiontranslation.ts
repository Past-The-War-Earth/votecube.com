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
	PollRevisionTranslationECascadeGraph,
	PollRevisionTranslationEId,
	PollRevisionTranslationEOptionalId,
	PollRevisionTranslationEUpdateProperties,
	PollRevisionTranslationESelect,
	QPollRevisionTranslation,
	QPollRevisionTranslationQId,
	QPollRevisionTranslationQRelation,
} from './qpollrevisiontranslation';
import {
	PositionTranslationECascadeGraph,
	PositionTranslationEId,
	PositionTranslationEOptionalId,
	PositionTranslationEUpdateProperties,
	PositionTranslationESelect,
	QPositionTranslation,
	QPositionTranslationQId,
	QPositionTranslationQRelation,
} from '../../../factor/position/qpositiontranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionPositionTranslationESelect
    extends IEntitySelectProperties, PollRevisionPositionTranslationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces
	pollRevisionTranslation?: PollRevisionTranslationESelect;
	positionTranslation?: PositionTranslationESelect;

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionPositionTranslationEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only
	pollRevisionTranslation: PollRevisionTranslationEId;
	positionTranslation: PositionTranslationEId;

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionPositionTranslationEOptionalId {
	// Id Properties

	// Id Relations - Ids only
	pollRevisionTranslation?: PollRevisionTranslationEOptionalId;
	positionTranslation?: PositionTranslationEOptionalId;

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionPositionTranslationEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionPositionTranslationECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionPositionTranslationEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionPositionTranslationECreateProperties
extends Partial<PollRevisionPositionTranslationEId>, PollRevisionPositionTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionPositionTranslationECreateColumns
extends PollRevisionPositionTranslationEId, PollRevisionPositionTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionPositionTranslation extends IQEntity
{
	// Id Fields

	// Id Relations
	pollRevisionTranslation: QPollRevisionTranslationQRelation;
	positionTranslation: QPositionTranslationQRelation;

	// Non-Id Fields

	// Non-Id Relations

}


// Entity Id Interface
export interface QPollRevisionPositionTranslationQId
{
	
	// Id Fields

	// Id Relations
	pollRevisionTranslation: QPollRevisionTranslationQId;
	positionTranslation: QPositionTranslationQId;


}

// Entity Relation Interface
export interface QPollRevisionPositionTranslationQRelation
	extends IQRelation<QPollRevisionPositionTranslation>, QPollRevisionPositionTranslationQId {
}

