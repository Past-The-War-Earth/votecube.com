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
	PollRevisionOpinionVersionECascadeGraph,
	PollRevisionOpinionVersionEId,
	PollRevisionOpinionVersionEOptionalId,
	PollRevisionOpinionVersionEUpdateProperties,
	PollRevisionOpinionVersionESelect,
	QPollRevisionOpinionVersion,
	QPollRevisionOpinionVersionQId,
	QPollRevisionOpinionVersionQRelation,
} from './qpollrevisionopinionversion';
import {
	OutcomeOpinionVersionTranslationECascadeGraph,
	OutcomeOpinionVersionTranslationEId,
	OutcomeOpinionVersionTranslationEOptionalId,
	OutcomeOpinionVersionTranslationEUpdateProperties,
	OutcomeOpinionVersionTranslationESelect,
	QOutcomeOpinionVersionTranslation,
	QOutcomeOpinionVersionTranslationQId,
	QOutcomeOpinionVersionTranslationQRelation,
} from './translation/qoutcomeopinionversiontranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeOpinionVersionESelect
    extends IEntitySelectProperties, OutcomeOpinionVersionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevisionOpinionVersion?: PollRevisionOpinionVersionESelect;
	translations?: OutcomeOpinionVersionTranslationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeOpinionVersionEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeOpinionVersionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollRevisionOpinionVersion?: PollRevisionOpinionVersionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeOpinionVersionECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations
	translations?: OutcomeOpinionVersionTranslationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeOpinionVersionEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	POLL_REVISION_OPINION_VERSION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeOpinionVersionECreateProperties
extends Partial<OutcomeOpinionVersionEId>, OutcomeOpinionVersionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeOpinionVersionECreateColumns
extends OutcomeOpinionVersionEId, OutcomeOpinionVersionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeOpinionVersion extends IQEntity
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollRevisionOpinionVersion: QPollRevisionOpinionVersionQRelation;
	translations: IQOneToManyRelation<QOutcomeOpinionVersionTranslation>;

}


// Entity Id Interface
export interface QOutcomeOpinionVersionQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QOutcomeOpinionVersionQRelation
	extends IQRelation<QOutcomeOpinionVersion>, QOutcomeOpinionVersionQId {
}

