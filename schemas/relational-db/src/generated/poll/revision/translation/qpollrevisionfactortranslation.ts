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
	FactorTranslationECascadeGraph,
	FactorTranslationEId,
	FactorTranslationEOptionalId,
	FactorTranslationEUpdateProperties,
	FactorTranslationESelect,
	QFactorTranslation,
	QFactorTranslationQId,
	QFactorTranslationQRelation,
} from '../../../factor/qfactortranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionFactorTranslationESelect
    extends IEntitySelectProperties, PollRevisionFactorTranslationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces
	pollRevisionTranslation?: PollRevisionTranslationESelect;
	factorTranslation?: FactorTranslationESelect;

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionFactorTranslationEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only
	pollRevisionTranslation: PollRevisionTranslationEId;
	factorTranslation: FactorTranslationEId;

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionFactorTranslationEOptionalId {
	// Id Properties

	// Id Relations - Ids only
	pollRevisionTranslation?: PollRevisionTranslationEOptionalId;
	factorTranslation?: FactorTranslationEOptionalId;

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionFactorTranslationEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionFactorTranslationECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionFactorTranslationEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionFactorTranslationECreateProperties
extends Partial<PollRevisionFactorTranslationEId>, PollRevisionFactorTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionFactorTranslationECreateColumns
extends PollRevisionFactorTranslationEId, PollRevisionFactorTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionFactorTranslation extends IQEntity
{
	// Id Fields

	// Id Relations
	pollRevisionTranslation: QPollRevisionTranslationQRelation;
	factorTranslation: QFactorTranslationQRelation;

	// Non-Id Fields

	// Non-Id Relations

}


// Entity Id Interface
export interface QPollRevisionFactorTranslationQId
{
	
	// Id Fields

	// Id Relations
	pollRevisionTranslation: QPollRevisionTranslationQId;
	factorTranslation: QFactorTranslationQId;


}

// Entity Relation Interface
export interface QPollRevisionFactorTranslationQRelation
	extends IQRelation<QPollRevisionFactorTranslation>, QPollRevisionFactorTranslationQId {
}

